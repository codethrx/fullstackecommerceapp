export const queryProducts = `
query{
    products{
      data{
        attributes{
          title
          description
          slug
          price
          createdAt
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;
export const getSingleProduct = `
  query getSingleProduct($slug:String!){
    products(filters:{slug:{eq:$slug}}){
     data{
      attributes{
        title
        description
        price
        slug
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
     }
    }

  }
`;
