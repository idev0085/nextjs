import React from 'react';
import Image from 'next/image'
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = (response) => {
    console.log(response);
}


const FacebookButton = () => {
    return (
        <FacebookLogin
            appId={process.env.FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile,user_friends,email"
            callback={responseFacebook}
            render={renderProps => (
                <div onClick={renderProps.onClick} className='pointer margin20'>
                    <Image
                        src="/images/facebook.png" // Route of the image file
                        height={144} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="facebook-icon"
                    />
                </div>

            )}
        />
    )
}

export default FacebookButton



