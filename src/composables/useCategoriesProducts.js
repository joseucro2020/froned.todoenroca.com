import { ref, nextTick } from "vue";
import axios from "@/services";

import { owlCarouselCategoriesProducts } from "@/js/themejs/homepage";

const useCategoriesProducts = () =>{
    const allCategoriesProducts = ref({});


    const categoriesproducts = async () => {
      await axios.get("api/productsCategories").then((resp) => {
        allCategoriesProducts.value = resp.data.data;
        console.log(allCategoriesProducts);
        nextTick(() => {        
          owlCarouselCategoriesProducts()
        });
      });
    };
  
    categoriesproducts();
  
      return {
        allCategoriesProducts,
        };
}

export default useCategoriesProducts;