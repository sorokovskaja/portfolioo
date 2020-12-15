import Welcome from 'react-welcome-page'
import Image from 'react-bootstrap/Image'


function Loading() {
    const im = <Image src={"white3.jpg"}></Image>

    return (
        <div id='my-container'>
            <Welcome
                loopDuration={1100}
                data={[
                    {
                        image: im,
                        text: 'My Quote',
                        imageAnimation: 'flipInX',
                        textAnimation: 'bounce',
                        backgroundColor: '#FF3354',
                        textColor: '#002134'
                    },
                    {
                        image: im,
                        text: 'My Quote',
                    },
                    {
                        image: im,
                        textAnimation: 'rotateIn'
                    }
                ]}

            />

        </div>
    )
}

export default Loading;