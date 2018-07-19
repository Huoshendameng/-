/**
 * 这个引用方式excited
 <get-rate
	 items="data"
	 binditemClick="itemClick"
 ></get-rate>
 --------------搞个大新闻----------------
 data数据结构
 data:[{id:1,checked:false,isOther:false,questionContent:'毕竟你们还too young'}]
 -------------学习一个-------------------
 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // itemData
        'items': {
            type: Array,
            value: []
        },
		'composeType': {
            type: String,
            value: '1'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    	compose:''
	},
	
	ready(){
    	this.data.items.map(function (value) {
            value.active = false
			value.checked = false
		})
		this.data.compose = this.data.composeType == 2 ? 'step' : this.data.composeType == 3 ? 'chat' : 'tradition'
		this.setData({items:this.data.items,compose:this.data.compose})
	},

    /**
     * 组件的方法列表
     */
    methods: {
		itemClickHandle(e){
			const i = parseInt(e.currentTarget.dataset.index)
			this.data.items.map(function (value,index,array) {
				array.length == 5 ?
				value.active = index <= i : value.active = index == i
			})
            this.data.items[i].checked =true
			this.setData({items:this.data.items})
			this.triggerEvent('RateClick',this.data.items)
		}
    }
})
