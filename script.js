const img = document.querySelector('img')
const containers = document.querySelectorAll('.container')

//图片拖出隐藏
img.addEventListener('dragstart',(e)=>{
setTimeout(()=>{
    img.style.visibility='hidden'
},0)

}
)

//拖动停止恢复
img.addEventListener('dragend',(e)=>{
    img.style.visibility='visible'
    }
 )

containers.forEach(container=>{
//拖拽进框
container.addEventListener('dragenter',(e)=>{
    container.classList.add('drag-over')
})
//离开框
container.addEventListener('dragleave',(e)=>{
    container.classList.remove('drag-over')
})
//放下
container.addEventListener('drop',(e)=>{
    container.classList.remove('drag-over')
})
//取消默认事件
container.addEventListener('dragover',(e)=>{
    e.preventDefault();
    container.appendChild(img)
})
})

