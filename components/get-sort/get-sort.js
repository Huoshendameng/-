/**
 * 这个引用方式excited
 <get-rate
	 items="data"
	 bindInputClick="inputClick"
	 bindInputChange="inputChange"
	 bindCheckboxChange="checkboxChange"
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
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
		sortUpClick(e){
            //防止dialog页面的setBigImg清空checked属性
            this.data.items.forEach( item => {item.checked = true})
			const i = parseInt(e.currentTarget.dataset.index)
			this.data.items.splice(i-1,0,this.data.items.splice(i,1)[0])
			this.setData({items:this.data.items})
			this.triggerEvent('SortUpClick',this.data.items)
		},
		sortDownClick(e){
		    //防止dialog页面的setBigImg清空checked属性
            this.data.items.forEach( item => {item.checked = true})
			const i = parseInt(e.currentTarget.dataset.index)
			this.data.items.splice(i+1,0,this.data.items.splice(i,1)[0])
			this.setData({items:this.data.items})
			this.triggerEvent('SortDownClick',this.data.items)
		},
        /*点击图片预览图片*/
        viewImg(e){
            const viewIndex = e.currentTarget.dataset.index;
            let imgList = [];
            this.data.items.forEach(item => {
                if(item.imgSrcUrl && imgList.imgSrcUrl != ''){
                    imgList.push(item.imgSrcUrl)
                }
            });
            wx.previewImage({
                current: imgList[viewIndex],
                urls: imgList
            })
        }
    },
    ready() {
        this.data.items.forEach( item => {item.checked = true})
        this.triggerEvent('Ready',this.data.items)
    }
})
