import { createContext, useState, useEffect } from "react";
import featureFlagsServiceMock from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      // original service call
      const response = await featureFlagsServiceMock();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider
      value={{
        loading,
        enabledFlags,
      }}
    >
      {children}
    </FeatureFlagsContext.Provider>
  );
}
