export default {
    template: `
        <table class="table mt-4">
            <thead>
            <tr>
                <th scope="col">分類</th>
                <th scope="col">產品名稱</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">是否啟用</th>
                <th scope="col">編輯</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in products" :key="key">
                    <td>{{ item.category }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.origin_price }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <span v-if="item.enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <!-- 合再一起的元件，通常都是 xxx-group ( ex: btn-group, list-group ) -->
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-primary" @click="openModal('update', item)">編輯</button>
                            <button type="button" class="btn btn-outline-danger"
                                @click="openModal('delete', item)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>`,
    props: ['products'],
    data() {
        return {
            tempProduct: {},
        }
    },
    methods: {
        openModal(operation, item) {
            this.$emit("open_modal", [operation, item]);
        },
    }
}