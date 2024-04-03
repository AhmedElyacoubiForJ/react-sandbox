const dummyApiResponse = {
    showLightDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true,
}
function featureFlagsServiceMock() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
        else reject('Some error occurred! Please try again')
    })
}

export default featureFlagsServiceMock;