export const aboutUs = {
    name: 'aboutUs',
    title: 'About Us',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'description',
            title:'Description',
            type:'text'
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
              }
            ]
          },
    ]
}