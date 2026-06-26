import style from './css/UserProfile.module.css'

function UserProfile() {
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzM-PViMF9Gx-Kmv_bWPhut0SAYrmLd2OR7Q&s" alt="" />
                <div>
                    <h4>Rashmiranjan shaw</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;