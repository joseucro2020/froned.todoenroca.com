import { ref, nextTick } from "vue";
import axios from "@/services";
import { owlCarouselFeatured } from "@/js/themejs/homepage";

const useFeatured = () => {    
  const allFeatured = ref({});


  const featured = async () => {
    await axios.get("api/productsBestsellers").then((resp) => {
        allFeatured.value = resp.data;
      nextTick(() => {        
        owlCarouselFeatured()
      });
    });
  };

  featured();

    return {
        allFeatured,
      };

}

export default useFeatured;