var dataJson = 'https://raw.githubusercontent.com/uhpnat/testJson/main/db.json'
var $id =document.getElementById.bind(document)
var $ =document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

function start(){
    getData(renderData)
}


// chạy hàm để sản phẩm được hiện
start()
// sử dụng callBack gọi api
function getData(callBack) {
    fetch(dataJson)
        .then((dataJson) => {
            return dataJson.json()
        })
        
        .then(callBack)
        .catch((error) => {
            alert('co loi')
        })
}
function themSuaXoa(dataJ) {

}
//hàm trong lúc chờ đợi dữ liệu load xong
function renderData(dataJ) {
    var dataIphone = dataJ.iphone
    var dataWatch = dataJ.watch
    var dataIpad = dataJ.ipad
    datas = dataIphone
    // hàm xem tất cả iphone
    $('.khongChoBam').addEventListener('click', (e) => {
        if(e.path[0].innerHTML == 'Xem tất cả'){
            showItems('iphone', dataIphone)
            e.path[0].innerHTML = 'Thu gọn'
        }else{
            e.path[0].innerHTML = 'Xem tất cả'

            showItems('iphone', dataIphone, 4)

        }
    })
 
// hàm hiển thị item khi vào web
    function showItems(name, data, soLuong) {
        var htmlWebs = ''
        for (const key in data) {
            var showItem = `<div class="col-xl-3 col-md-4 col-6">
        <div class="shop-iphone--item">
            <div class="shop-iphone--item---thongbao">
                <img src="${data[key].imgThongBao}" alt="">
            </div>
            <div class="shop-iphone--item---iphone ">
                <img src="${data[key].imgIphone}" alt="">
            </div>
            <h5>${data[key].tenIphone} <span>${data[key].dungLuong}</span></h5>
            <h6>Giá từ: ${data[key].giaIphone.toLocaleString()}₫</h6>
            <p>Hot Sale giá chỉ: ${data[key].giamGiaIphone.toLocaleString()}₫</p>
            <div class="row btn--iphone ">
            
                      <div class="col-12"><button type="button" class="btn btn-outline-danger w-100" onclick="indexAddCart(${key})">Thêm vào giỏ</button></div>
                    </div>
        </div>
        </div>`
            htmlWebs += showItem
            if (key == soLuong - 1) {
                break
            }
        }

       $id(name).innerHTML = htmlWebs
    }
    showItems('iphone', dataIphone, 4)
    showItems('thongTinIphone', dataIphone)
    // showItems('watch', dataWatch)
    // showItems('ipad', dataIpad)
}
    var tongGia = 0
// hàm hiển thị item khi vào web
    function showItems(name, data, soLuong) {
        var htmlWebs = ''
        for (const key in data) {
            var showItem = `<div class="col-xl-3 col-md-4 col-6">
        <div class="shop-iphone--item">
            <div class="shop-iphone--item---thongbao">
                <img src="${data[key].imgThongBao}" alt="">
            </div>
            <div class="shop-iphone--item---iphone ">
                <img src="${data[key].imgIphone}" alt="">
            </div>
            <h5>${data[key].tenIphone} <span>${data[key].dungLuong}</span></h5>
            <h6>Giá từ: ${data[key].giaIphone.toLocaleString()}₫</h6>
            <p>Hot Sale giá chỉ: ${data[key].giamGiaIphone.toLocaleString()}₫</p>
            <div class="row btn--iphone ">
            
                      <div class="col-12"><button type="button" class="btn btn-outline-danger w-100" onclick="indexAddCart(${key})">Thêm vào giỏ</button></div>
                    </div>
        </div>
        </div>`
            htmlWebs += showItem
            if (key == soLuong - 1) {
                break
            }
        }

       $id(name).innerHTML = htmlWebs
    }
//hàm khi thêm sản phẩm
function indexAddCart(index) {
    datas[index].valueIP += 1
    itemShopping('IDitemCart', datas)
    itemShoppingMini('IDitemCart-mini', datas)
    if (datas[index].valueIP == 1) {
        toastMess('Thêm sản phẩm thành công')
    }
    resetSoLuong()
    resetGia()
    
}
setTimeout(() => {
    indexAddCart(0)
indexAddCart(1)
indexAddCart(2)
}, 1000);
//thay đổi số lượng trên giao diện web
    function resetSoLuong() {
        var soLuong = 0
        for (const key in datas) {
            soLuong += datas[key].valueIP
        }
        if (soLuong == 0) {
           $id('xoaall').innerHTML = ''

        }
        $id('slShopMini').innerHTML = soLuong
        $$('.sll')[0].innerHTML = soLuong
        $$('.sll')[1].innerHTML = soLuong
        
    }
    // thay đổi giá trên giao diện web
    function resetGia() {
        var e =$id("selecttt");
        var giaTri = e.options[e.selectedIndex].value
        var tongGia = 0
        for (const key in datas) {
            tongGia += (datas[key].valueIP) * (datas[key].giaIphone)
        }
        $$('.showGiaIphone')[0].innerHTML = `${tongGia.toLocaleString()}₫`
        $$('.showGiaIphone')[1].innerHTML = (tongGia == 0) ? `${tongGia}₫` : `${(tongGia + giaTri * 1).toLocaleString()}₫`;
    }
// thêm item bào shopppp lớn
function itemShopping(name, data, soLuong) {
    var sttHien = 0
    var htmlWebs = ''
    for (const key in data) {
        var showItem = `<div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <img
        src="${data[key].imgIphone}"
        class="img-fluid rounded-3" alt="Cotton T-shirt">
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <h5 class="text-muted">${data[key].tenIphone}</h5>
      <h6 class="text-black mb-0">${data[key].dungLuong}</h6>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

      <button type="button" class="btn btn-primary" onclick="giamSoLuong(${key})">-</button>

      <input style="width:40px ;" class="text-center mx-3 valueSL" type="number"value="${data[key].valueIP}">
      <button type="button" class="btn btn-primary btnGiam" onclick="tangSoLuong(${key})">+</button>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      <h6 class="mb-0"> ${(data[key].giaIphone * data[key].valueIP).toLocaleString()}₫</h6>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
      <button type="button" class="btn btn-danger" onclick="xoaSP(${key})">X</button>
    </div>
  </div>

  <hr class="my-4">`
        if (data[key].valueIP >= 1) {

            ++sttHien
            htmlWebs += showItem
           $id('xoaall').innerHTML = `<button type="button" class="btn btn-danger" onclick="xoaAll()">Xóa Tất Cả (${sttHien}) </button>`
        }
        if (key == soLuong - 1) {
            break
        }
    }
   $id(name).innerHTML = htmlWebs
    if (sttHien == 0) {
       $id(name).innerHTML = `<h4 class="text-danger text-center">Giỏ hàng trống</h4>
        <img class="w-25 d-flex mx-auto" src="./img/add-to-cart.png" alt="">`
       $id('xoaall').innerHTML = ''
    }
    
}
////////////////////
// thêm item bào shopppp bé

function itemShoppingMini(name, data, soLuong) {
    var sttHien = 0
    var htmlWebs = ''
    for (const key in data) {
        var showItem = `<div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-3">
          <img
            src="${data[key].imgIphone}"
            class="img-fluid rounded-3" alt="Cotton T-shirt">
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-text-black-50">${data[key].tenIphone}</h6>
          <p class="text-muted mb-0">Số Lượng ${data[key].valueIP}</p>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 class="mb-0"> ${(data[key].giaIphone * data[key].valueIP).toLocaleString()}₫</h6>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <button type="button" class="btn btn-danger" onclick="xoaSP(${key})">X</button>
        </div>
      </div>
    
      <hr class="my-4">`
      
        if (data[key].valueIP >= 1) {
    var soSanPham =0
                //sttHien là số sản phẩm được in ra
                // soSanPham là tổng số luọng sản phẩm
            data.forEach(element => {
                soSanPham +=  element.valueIP
                console.log(soSanPham)
            });
            ++sttHien
            htmlWebs += showItem
           $id('xoaall').innerHTML = `<button type="button" class="btn btn-danger" onclick="xoaAll()">Xóa Tất Cả (${soSanPham}) </button>`
        }
        if (key == soLuong - 1) {
            break
        }
    }

   $id(name).innerHTML = htmlWebs
    if (sttHien == 0) {
       $id(name).innerHTML = `<h4 class="text-danger text-center">Giỏ hàng trống</h4>
        <img class="w-25 d-flex mx-auto" src="./img/add-to-cart.png" alt="">`
       $id('xoaall').innerHTML = `<button type="button" class="btn btn-danger" onclick="xoaAll()">Xóa Tất Cả (${soSanPham}) </button>`

    }
}
// xóa tất cả sản phẩm
function xoaAll() {
    for (const key in datas) {
        datas[key].valueIP = 0
        console.log(datas[key].valueIP)
        xoaSP(key)
    }
   $id('xoaall').innerHTML = ''

}
// xóa 1 sản phẩm khỏi giỏ hàng
function xoaSP(index) {

    datas[index].valueIP = 0
    itemShopping('IDitemCart', datas)
    itemShoppingMini('IDitemCart-mini', datas)
    // alert('Sản phẩm đã được thêm vào giỏ hàng')
    resetSoLuong()
    resetGia()
}
// tăng sối lượng iphone
function tangSoLuong(index) {
    $('.valueSL').value = +$('.valueSL').value + 1
    indexAddCart(index)
    resetGia()

}
// giảm sối lượng iphone

function giamSoLuong(index) {
    if ($('.valueSL').value > 0) {
        $('.valueSL').value = +$('.valueSL').value - 1

        datas[index].valueIP -= 1
        itemShopping('IDitemCart', datas)
        itemShoppingMini('IDitemCart-mini', datas)

        // alert('Sản phẩm đã được thêm vào giỏ hàng')
        resetSoLuong()
        resetGia()
    }

}


//làm cho tất cả trang html dồn vào 1 trang index
//làm cho tất cả trang html dồn vào 1 trang index
function clicknav(value) {
    var nonepoly =$id('nonepolyshop')
    var noneiphone =$id('noneiphone')
    var nonecart =$id('nonecart')
        nonepoly.style.display = 'none'
        noneiphone.style.display = 'none'
        nonecart.style.display = 'none'
    if (value == 1) {
        nonepoly.style.display = 'block'
    }
    if (value == 2) {
        noneiphone.style.display = 'block'
    } 
    if(value==3) {
        nonecart.style.display = 'block'
    }
}
clicknav(3)
document.getElementById('top-main-navigation').style = " width : 100% ; z-index : 99"
/////////////////test
///////////////
// sự kiện khi cuộn chuột xuống btn sẽ hiện lên
window.addEventListener('scroll', function () {
    var hightP = window.scrollY
    //$id('top-main-navigation').style
    var scrollBackToTop = this.$('.scrollTop')
    scrollBackToTop.classList.toggle('active', window.scrollY > 500)  
    if(window.scrollY>1){
        this.document.getElementById('heighttttt').style.height= '50px'

       $id('top-main-navigation').style = ` margin-top:100px; top: -100px;position: fixed;width : 100% ; z-index : 99; transition: 1.2s; `
    }
    else{
        this.document.getElementById('heighttttt').style.height= '0px'
document.getElementById('top-main-navigation').style = " width : 100% ; z-index : 99;"

    }
})
// hàm làm web chạy lên đầu trang
function scrollTopne() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
// bảng thông báo data = thông báo
// number = kiểu icon thông báo kiểu 1 là error còn lại là check

function toastMess(data,number) {
    
    var checkkk =$id('toastTB')
    if(number ==1){
        checkkk.setAttribute('name','error-circle')
        checkkk.setAttribute('color','#d51b1b')
    }else{
        checkkk.setAttribute('color','#0691ee')
        checkkk.setAttribute('name','check-circle')

    }
    // error 
   $id('toastThongBao').innerHTML = data
    var toastMess =$id('toastMess')
    toastMess.style = 'display :block ; '
    setTimeout(() => {
        toastMess.style = 'display :none ; '
    }, 2000);
}
$id('toastMess').addEventListener('click',(e)=>{
    $id('toastMess').style.display = 'none'

})
//chuyển sáng tối giao diện
document.getElementById('light').addEventListener('click',()=>{
    dark()
})
function dark(){
    if(document.getElementById('light').src == 'https://cdn1.iconfinder.com/data/icons/school-set-1/512/20-64.png'){
   $id('light').src = 'https://cdn3.iconfinder.com/data/icons/object-emoji/50/Lightbulb-64.png'
   $id('lightDark').classList.add('lightDark')

    }else{
   $id('lightDark').classList.remove('lightDark')

       $id('light').src = 'https://cdn1.iconfinder.com/data/icons/school-set-1/512/20-64.png'
    }
}
