// Services

const comp = document.querySelector('#compser')
const relo = document.querySelector('#reloser')
const promo = document.querySelector('#promoser')

const title = document.querySelector('#serslogan')
const description = document.querySelector('#serdes')
const image = document.querySelector('#serimg')



comp.addEventListener('click',()=>{
    image.style.backgroundImage= "url('/img/comprehensive.png')"
    title.textContent = 'Comprehensive Package';
    description.textContent = "Our Comprehensive Service offers a hassle-free and seamless relocation experience, combining both moving and promotion aspects. Whether you're looking to move your business to a new location or want to boost your brand's visibility, our experts handle everything for you. From logistics and transportation to marketing and promotional strategies, we've got you covered, ensuring a smooth transition and maximum exposure for your business.";
}
);

relo.addEventListener('click',()=>{
    image.style.backgroundImage= "url('/img/relocation.png')"
    title.textContent = ' Business Relocation Solutions';
    description.textContent = "Our Business Relocation Solutions are tailored to meet your specific needs when it comes to moving your company to a new location. Our team of professionals ensures a swift and efficient relocation process, minimizing downtime and disruptions to your operations. With careful planning and attention to detail, we take the stress out of moving, leaving you to focus on what matters most – running your business successfully in its new home.";
}
);

promo.addEventListener('click',()=>{
    image.style.backgroundImage= "url('/img/promotion.png')"
    title.textContent = 'Strategic Business Promotion';
    description.textContent = ": Our Strategic Business Promotion service is designed to elevate your brand's visibility and reach. Through targeted marketing campaigns and innovative promotional strategies, we help you stand out in the competitive market. From digital marketing to traditional advertising, our team crafts tailored solutions that align with your business objectives. Let us amplify your brand's message, expand your customer base, and drive sustainable growth for your business.";
}
);