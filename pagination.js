export default {
    template: `
    <nav aria-label="...">
        <ul class="pagination">
        <li class="page-item" :class="{disabled: page.current_page === 1}" @click="update_curr_page('previous')">
            <a class="page-link" href="#" aria-disabled="true">Previous</a>
        </li>

        <li class="page-item" :class="{active: page.current_page === i}" v-for="i in page.total_pages" :key="i"><a class="page-link" @click.prevent="update_curr_page(i)">{{ i }}</a></li>

        <li class="page-item" :class="{disabled: page.current_page === page.total_pages }" @click="update_curr_page('next')">
            <a class="page-link" href="#">Next</a>
        </li>
        </ul>
    </nav>`,
    props: ['page'],
    methods: {
        update_curr_page(para){
            if(para === 'previous'){
                if(this.page.current_page > 1){
                    this.page.current_page -= 1;
                }
                else{
                    return ;
                }
            }
            else if(para === 'next'){
                if(this.page.current_page < this.page.total_pages){
                    this.page.current_page += 1;
                }
                else{
                    return ;
                }
            }
            else {
                let page_num = para;
                if(page_num > 0 && page_num <= this.page.total_pages ){
                    this.page.current_page = page_num;
                }
                else{
                    return ;
                }
            }
            
            this.$emit("update", this.page.current_page);
        }
    }
}