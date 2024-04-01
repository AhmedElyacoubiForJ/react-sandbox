export default function User({ user }) {
  //const {login} = user;
  const createdDate = new Date(user.created_at);

  return (
    <div className="user">
      <div>
        <img src={user.avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={user.html_url}>{user.name || user.login}</a>
        <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
            month: 'short',
        })} ${createdDate.getFullYear()}`}</p>
      </div>
      <div className="profile-info">
      <div>
        <p>Public Repos</p>
        <p>{user.public_repos}</p>
      </div>
      <div>
        <p>Flowers</p>
        <p>{user.flowers}</p>
      </div>
      <div>
        <p>Flowing</p>
        <p>{user.flowing}</p>
      </div>
      </div>
    </div>
  );
}
