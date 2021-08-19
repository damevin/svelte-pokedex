var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/damevin/svelte-pokedex', // Update to point to your repository  
        user: {
            name: 'Raphaël DAMEVIN', // update to use your name
            email: 'raphael.damevin@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)