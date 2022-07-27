




const UserCard = ({user}) => {
  return (
    <div className='card'>
        <div className="img-box">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_960_720.png" alt="user-img" />
        </div>
        <h4>{user.name}</h4>
        <b>{user.email}</b><br />
        <i>tel: {user.phone}</i>
    </div>
  )
}

export default UserCard