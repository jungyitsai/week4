export default {
    template: `
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="delProductModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="delProductModalLabel">刪除產品</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    是否刪除
                    <strong class="text-danger">{{ temp_product.title }}</strong>
                    (刪除後無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="deleteProduct">確定刪除</button>
                </div>
            </div>
        </div>
    </div>`,
    props: ['api', 'temp_product'],
    methods: {
        deleteProduct(){

            let api = `${this.api.apiPath}api/${this.api.uuid}/admin/ec/product/${this.temp_product.id}`;
            let vm = this;
            axios.delete(api)
                .then(function(res){
                    console.log("deleteProduct");
                    console.log(res);
                    $('#delProductModal').modal('hide');
                    vm.$emit('update');
                }).catch(function(err){
                    console.log(err);
                });

            
        }
    }
}