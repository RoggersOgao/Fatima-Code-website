export const courses = {
    name:'courses',
    title:'Courses',
    type:'document',
    fields:[
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
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'level',
            title:'Level',
            type:'string'
        },
        {
            name:'duration',
            title:'Number of Weeks',
            type:'number'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
          },
        {
            name:'rating',
            title:'Rating',
            type:'number'
        },
        {
            name:'students',
            title:'Number of Students',
            type:'number'
        },
        {
            name:'lessons',
            title:'Number of Lessons',
            type:'number'
        }
    ]
}