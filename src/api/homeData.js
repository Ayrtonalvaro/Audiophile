export const homeData = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = {
            hero: {
              heading: 'XX99 mark II headphones',
              subHeading: 'new product',
              description:
                'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
              button: {
                title: 'see product',
                link: '/product/xx99-mark-two-headphones'
              }
            }
          };
          resolve(data)
        }, 0);
    })
}