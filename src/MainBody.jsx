import React from 'react';
import './MainBody.css';
import Massage from './assets/Massage.png';

function MainBody() {
    return (
        <>
          <div className="main-container">
            <div className="image">
              <img src={Massage} alt="" />
            </div>
        <br />
            <div className="btn"> <br /><br />
                <h1>Think Health. Think Massage.</h1>
                <p>We are open 9am to 6pm, Monday through Sunday. If you would like to schedule an appointment
                    <br /> with us, please call us at 987-654-3210 today!
                </p> <br /> <br />
                <div class="button-container">
                <button className='btn1'>LEARN MORE ABOUT US</button>
                <button className='btn2'>CONTACT US TODAY</button>
        
            </div>
            <br /><br /><br />
            </div>  

            <div className="des">
            <p>Massage therapy is a holistic approach to health and wellness that has been practiced for thousands of years. It involves manipulating the body's soft tissues through various techniques to promote relaxation, alleviate pain, and improve overall well-being. Whether you're seeking relief from chronic pain, stress reduction, or simply a way to pamper yourself, massage therapy offers a multitude of benefits tailored to meet your specific needs.</p>

            <p>One of the key advantages of massage therapy is its ability to reduce stress and anxiety. By stimulating the body's relaxation response, massage therapy helps lower cortisol levels and boost serotonin production, leading to a calmer and more balanced state of mind. This not only improves your mental health but also enhances your physical health, as chronic stress is known to contribute to a variety of health issues, including high blood pressure and weakened immune function.</p>

            <p>In addition to stress relief, massage therapy is highly effective in managing pain and enhancing physical performance. Techniques such as deep tissue massage, Swedish massage, and sports massage target specific areas of tension and discomfort, helping to improve blood circulation, reduce inflammation, and promote faster recovery from injuries. Whether you're an athlete looking to optimize your performance or someone dealing with everyday aches and pains, regular massage sessions can play a crucial role in maintaining your physical health and overall vitality.</p>
            
            </div>
          </div>  
        </>
    );
}

export default MainBody;