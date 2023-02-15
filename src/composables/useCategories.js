import { ref, onMounted } from 'vue'
import axios from '@/services'

const useCategories = () => {
    const allCategories = ref({});
    const optionCategories = ref(0)
    const search = ref(null)

    const categories = () => {
      axios.get('api/categories_filter_menu').then((resp) => {
        allCategories.value = resp.data
      })
    }
    
    onMounted( () => {
      categories();
    })

    return {
        allCategories,
        optionCategories,
        search
    }
}

export default useCategories