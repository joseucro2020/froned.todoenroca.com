import { ref, nextTick } from "vue";
import axios from "@/services";
import { owlCarouselOffers } from "@/js/themejs/homepage";

const useOffers = () => {
  const allOffers = ref({});

  const offers = async () => {
    await axios.get("api/productsOffers").then((resp) => {
      allOffers.value = resp.data;
      nextTick(() => {        
        owlCarouselOffers()
      });
    });
  };

  offers();


  return {
    allOffers,
  };
};

export default useOffers;
