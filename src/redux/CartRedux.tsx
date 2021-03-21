let id = 0
export const REDUX_KEY = "Cart"


export interface CartState {
  checked: boolean,
  product: listProduct[]
}
export interface listProduct {
  providerId: string,
  title: string,
  logo: string,
  data: itemProduct[],
  checked: boolean,
}
export interface itemProduct {
  price: number,
  count: number,
  unit: string,
  name: string,
  checked: boolean,
  image: string,
  productId: string,
}

export const defaultState: CartState = {
  checked: true,
  product: [
    {
      providerId: "1",
      checked: true,
      logo: "https://nongsandungha.com/img/banner/57u87a6QZdC0OzsjzjMP-tWWIHs9SrFwbanner2.jpg",
      title: "MOKI",
      data: [
        {
          productId: "p1",
          image: "https://moki.com.vn/ingredient/5f64dd1ed1b59.jpg",
          price: 125000,
          count: 5,
          unit: "KG",
          name: "Ca hoi 5",
          checked: true
        },
        {
          image: "https://nongsandungha.com/wp-content/uploads/2018/06/loi-ich-an-tao-xanh.jpg",
          price: 125000,
          count: 5,
          unit: "KG",
          name: "Ca hoi6",
          checked: true,
          productId: "p2",
        },
        {
          image: "https://nongsandungha.com/wp-content/uploads/2018/06/loi-ich-an-tao-xanh.jpg",
          price: 125000,
          count: 5,
          unit: "KG",
          name: "Ca hoi7",
          checked: true,
          productId: "p3",

        },
        {
          image: "https://nongsandungha.com/wp-content/uploads/2018/06/loi-ich-an-tao-xanh.jpg",
          price: 125000,
          count: 5,
          unit: "KG",
          name: "Ca hoi8",
          checked: true,
          productId: "p4",
        },
      ]
    },
    {
      providerId: "2",
      logo: "https://nongsandungha.com/img/banner/57u87a6QZdC0OzsjzjMP-tWWIHs9SrFwbanner2.jpg",
      checked: true,
      title: "MOKI",
      data: [
        {
          image: "https://nongsandungha.com/wp-content/uploads/2018/06/loi-ich-an-tao-xanh.jpg",
          price: 125000,
          count: 5,
          unit: "KG",
          name: "Ca hoi",
          checked: true,
          productId: "p6",

        },
        {
          image: "https://nongsandungha.com/wp-content/uploads/2018/06/loi-ich-an-tao-xanh.jpg",
          price: 125000,
          count: 5,
          unit: "KG",
          name: "Ca hoi2",
          checked: true,
          productId: "p7",
        },
        {
          image: "https://nongsandungha.com/wp-content/uploads/2018/06/loi-ich-an-tao-xanh.jpg",
          price: 125000,
          count: 5,
          unit: "KG",
          name: "Ca hoi3",
          checked: true,
          productId: "p8",
        },
        {
          image: "https://nongsandungha.com/wp-content/uploads/2018/06/loi-ich-an-tao-xanh.jpg",
          price: 12500000,
          count: 5,
          unit: "KG",
          name: "Ca hoi4",
          checked: true,
          productId: "p9",
        },
      ]
    },
  ]
}
export enum ActionTypes {
  checkAllChange = "checkAllChange",
  clickCheckBoxSection = "clickCheckBoxSection",
  clickCheckBoxItem = "clickCheckBoxItem",
}

export const actions = {
  checkAllChange: () => {
    return {
      type: ActionTypes.checkAllChange,
    }
  },
  clickCheckBoxSection: (id: string) => {
    return {
      type: ActionTypes.clickCheckBoxSection,
      providerId: id
    }
  },
  clickCheckBoxItem:(id: string) => {
    return {
      type: ActionTypes.clickCheckBoxItem,
      productId: id
    }
  }
}

export const reducer = (state: CartState = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.checkAllChange:
      let allChecked = !(state.checked)
      return {
        ...state,
        product: state.product.map((item) => {
          return {
            ...item,
            checked: allChecked,
            data: item.data.map((itemInside) => {
              return {
                ...itemInside,
                checked: allChecked,
              }
            })
          }
        }),
        checked: allChecked
      }

    case ActionTypes.clickCheckBoxSection:
      return {
        ...state,
        product: state.product.map(item => {
          if (item.providerId == action.providerId) {
            let newChecked = !(item.checked);
            return {
              ...item,
              checked: newChecked,
              data: item.data.map(itemInside => {
                return { ...itemInside, checked: newChecked }
              })
            }
          } else {
            return item;
          }
        })
      }

      case ActionTypes.clickCheckBoxItem:
        return {
          ...state,
          product:state.product.map(item => {
            return {
              ...item,
            }
          })
        }
    default:
      return state

  }


}