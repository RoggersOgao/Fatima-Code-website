export const hero = {
    name: 'hero',
    title: 'Hero',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'text'
        },
        {
            name: 'firstImage',
            title: 'First image',
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
          {
            name: 'secondImage',
            title: 'Second image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt1',
                type: 'string',
                title: 'Alternative Text',
              }
            ]
          },
          {
            name:'phone',
            title:'Phone',
            type:'string'
          }
    ]
}