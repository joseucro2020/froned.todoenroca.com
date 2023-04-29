import {
  ref,
  onMounted,
  onUpdated
} from "vue";
import axios from "@/services";
import { hoverMegaMenu, renderWidthSubmenu } from "@/js/themejs/so_megamenu";

const useCategories = () => {
  const allCategories = ref({});
  const optionCategories = ref(0);
  const search = ref(null);

  const categories = async () => {
    await axios.get("api/categories_filter_menu").then((resp) => {
      allCategories.value = resp.data;
    });
  };  

  onMounted(() => {
    categories();
  });

  onUpdated(() => {
    hoverMegaMenu();
    renderWidthSubmenu();
  });

  return {
    allCategories,
    optionCategories,
    search,
  };
};

export default useCategories;
