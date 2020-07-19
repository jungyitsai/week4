export default {
    template: `
    <div class="modal fade" id="ProductModal" tabindex="-1" role="dialog" aria-labelledby="ProductModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="ProductModalLabel">建立新產品</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="image-url" class="col-form-label">貼上圖片網址</label>
                                <input v-model="temp_product.imageUrl" type="url" class="form-control" id="image-url"
                                    placeholder="請貼上圖片網址">
                            </div>
                            <img class="img-fluid" :src="temp_product.imageUrl">
                        </div>

                        <div class="col-sm-8">
                            <form>
                                <!-- form-group 可以讓不同元件在表單內取得最佳間距 -->
                                <div class="form-group">
                                    <label for="title" class="col-form-label">標題</label>
                                    <input v-model="temp_product.title" type="text" class="form-control" id="title"
                                        placeholder="請輸入標題">
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <label for="category" class="col-form-label">分類</label>
                                        <input v-model="temp_product.category" type="text" class="form-control"
                                            id="category" placeholder="請輸入分類">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="unit" class="col-form-label">單位</label>
                                        <input v-model="temp_product.unit" type="text" class="form-control" id="unit"
                                            placeholder="請輸入單位">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <label for="origin_price" class="col-form-label">原價</label>
                                        <input v-model="temp_product.origin_price" type="text" class="form-control"
                                            id="origin_price" placeholder="請輸入原價">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="price" class="col-form-label">售價</label>
                                        <input v-model="temp_product.price" type="text" class="form-control"
                                            id="price" placeholder="請輸入售價">
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group">
                                    <label for="description">產品描述</label>
                                    <textarea v-model="temp_product.description" class="form-control"
                                        id="description" rows="2" placeholder="請輸入產品描述"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="content">說明內容</label>
                                    <textarea v-model="temp_product.content" class="form-control" id="content"
                                        rows="2" placeholder="請輸入說明內容"></textarea>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="enabled"
                                        v-model="temp_product.enabled">
                                    <label class="form-check-label" for="enabled">
                                        是否啟用
                                    </label>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
                </div>
            </div>
        </div>
    </div>`,
    props: ["api", "temp_product"],
    methods: {
        updateProduct() {
            console.log('updateProduct');
            let api = `${this.api.apiPath}api/${this.api.uuid}/admin/ec/product/${this.temp_product.id}`;

            axios.patch(api, this.temp_product)
                .then(function (res) {
                    console.log(res);
                    $('#ProductModal').modal('hide');
                    vm.$emit('update');
                }).catch(function (err){
                    console.log(err);
                });
        }
    }
}