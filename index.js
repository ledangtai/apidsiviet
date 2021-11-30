var express = require("express");
var database = require("./database");
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
//=================================get=================================================//
app.get("/ListNv", function(req,res){
    database.getNhanVien(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/ListSlider", function(req,res){
    database.getSlider(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/ListDanhMuc", function(req,res){
    database.getDanhmuc(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/ListSanPham", function(req,res){
    database.getSanpham(function(resultQuery){
        res.json(resultQuery);
    })
})
app.get("/ListDiachi", function(req,res){
    database.getdiachi(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/ListGioithieu", function(req,res){
    database.getgioithieu(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/ListKhachhang", function(req,res){
    database.getkhachhang(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/ListSangiaodich", function(req,res){
    database.getsangiodich(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/Listtinnhan", function(req,res){
    database.gettinnhan(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/Listtintucsukien", function(req,res){
    database.gettintucsukien(function(resultQuery){
        res.json(resultQuery);
    })
});
app.get("/Listchucnanghoatdong", function(req,res){
    database.getChucnanghoatdong(function(resultQuery){
        res.json(resultQuery);
    })
});
//=======================================================insert=====================================================//
app.post("/insertNV",function(req,res){
    var data = req.body
     database.insertNhanVien(data,function(resultQuery){
         res.json(resultQuery);
     })
});

app.post("/insertCNHD",function(req,res){
    var data = req.body
    database.insertCNHD(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.post("/insertTintucsukien",function(req,res){
    var data = req.body
    database.insertTintucsukien(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.post("/insertSangiaodich",function(req,res){
    var data = req.body
    database.insertSangiaodich(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.post("/insertDichvu",function(req,res){
    const data = req.body
    database.insertDichvu(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.post("/insertDiachi",function(req,res){
    var data = req.body
    database.insertDiachi(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.post("/insertGioithieu",function(req,res){
    var data = req.body
    database.insertGioithieu(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.post("/insertKhachhang",function(req,res){
    const data = req.body
    database.insertKhachhang(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.post("/insertSlider", function(req,res){
   const data = req.body
    database.insertSlider(data, function(resultQuery){
        res.json(resultQuery);
    })
});
app.post("/insertTinnhan",function(req,res){
    var data = req.body
    database.insertTinnhan(data,function(resultQuery){
        res.json(resultQuery);
    })
});
//======================================================update==========================================================//
app.put("/updateNV",function(req,res){
    var data = req.body
    database.updateNhanvien(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.put("/updateCNHD",function(req,res){
   var data = req.body
    database.updateCNHD(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.put("/updateDV",function(req,res){
   const data = req.body
    database.updateDichvu(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.put("/updateSGD",function(req,res){
    var data = req.body
    database.updateSangiaodich(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.put("/updateTTSK",function(req,res){
    var data = req.body
    database.updateTintucsukien(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.put("/updateDiachi",function(req,res){
    var data = req.body
    database.updateDiachi(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.put("/updateGioithieu",function(req,res){
    var data = req.body
    database.updateGioithieu(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.put("/updateKhachhang",function(req,res){
  const data = req.body
    database.updateKhachhang(data,function(resultQuery){
        res.json(resultQuery);
    })
});
app.put("/updateSlider",function(req,res){
    const data = req.body
    database.updateSlider(data,function(resultQuery){
        res.json(resultQuery);
    })
});
//======================================================delete=========================================================//
app.delete("/deleteNV",function(req,res){
    var manv = req.query.manv;
    database.deleteNhanVien(manv,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteDanhmuc",function(req,res){
    var madm = req.query.madm;
    database.deleteDanhmuc(madm,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteCNHD",function(req,res){
    var macnhd = req.query.macnhd;
    database.deleteCNHD(macnhd,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteDV",function(req,res){
    var madv = req.query.madv;
    database.deleteDV(madv,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteTTSK",function(req,res){
    var mattsk = req.query.mattsk;
    database.deleteTTSK(mattsk,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteSGD",function(req,res){
    var masgd = req.query.masgd;
    database.deleteSGD(masgd,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteDiachi",function(req,res){
    var madc = req.query.madc;
    database.deleteDiachi(madc,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteGioithieu",function(req,res){
    var magt = req.query.magt;
    database.deleteGioithieu(magt,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteKhachhang",function(req,res){
    var makh = req.query.makh;
    database.deleteKhachhang(makh,function(resultQuery){
        res.json(resultQuery);
    })
});
app.delete("/deleteSlider",function(req,res){
    var maslider = req.query.maslider;
    database.deleteSlider(maslider,function(resultQuery){
        res.json(resultQuery);
    })
});

//======================================================Lấy Từng Dự Án===========================================================//
app.get("/ItemDichvu/:madv",function(req,res){
    var madv_id = req.params.madv;
    database.DuanItem(madv_id,function(resultQuery){
        res.json(resultQuery);
    })
})
app.get("/ItemGioithieu/:magt",function(req,res){
    var magt_id = req.params.magt;
    database.GioithieuItem(magt_id,function(resultQuery){
        res.json(resultQuery);
    })
})
app.get("/ItemCNHD/:macnhd",function(req,res){
    var macnhd_id = req.params.macnhd;
    database.CNHDItem(macnhd_id,function(resultQuery){
        res.json(resultQuery);
    })
})
app.get("/ItemSGD/:masgd",function(req,res){
    var masgd_id = req.params.masgd;
    database.SGDItem(masgd_id,function(resultQuery){
        res.json(resultQuery);
    })
})
app.get("/ItemTintuc/:mattsk",function(req,res){
    var mattsk_id = req.params.mattsk;
    database.TintucItem(mattsk_id,function(resultQuery){
        res.json(resultQuery);
    })
})
app.listen(8000);