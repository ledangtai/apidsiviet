var mysql = require("mysql");
var connection = mysql.createConnection({
    host : "localhost",
    user:'root',
    password:'',
    database:'dsiviet'
});
var connect = function(){
    connection.connect(function(error){
        if(!error){
            console.log("kết nối thành công");
        }
        else {
            console.log("kết nối không thành công");
        }
    })
}
var closeDB = function(){
    connection.end(function(error){
       if(!error){
           console.log("ngắt kết nối thành công");
       }
       else{
           console.log("ngắt kết nối không thành công");
       }
    })
}
exports.getNhanVien = function(callbackQuery){
    connect();
    connection.query("select * from nhanvien", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
exports.getSlider = function(callbackQuery){
    connect();
    connection.query("select * from slider", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
exports.getSanpham = function(callbackQuery){
    connect();
    connection.query("select * from dichvu", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
exports.getChucnanghoatdong = function(callbackQuery){
    connect();
    connection.query("select * from chucnanghoatdong", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}

exports.getdiachi = function(callbackQuery){
    connect();
    connection.query("select * from diachi", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
exports.getgioithieu = function(callbackQuery){
    connect();
    connection.query("select * from gioithieu", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
exports.getkhachhang = function(callbackQuery){
    connect();
    connection.query("select * from khachhang", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
exports.getsangiodich = function(callbackQuery){
    connect();
    connection.query("select * from sangiaodich", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
exports.gettinnhan = function(callbackQuery){
    connect();
    connection.query("select * from tinnhan", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
exports.gettintucsukien = function(callbackQuery){
    connect();
    connection.query("select * from tintucsukien", function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log("lỗi rồi!!!");
        }
    })
}
//===================================================insert=========================================================//
exports.insertNhanVien = function({hoten,ngaysinh,chucvu},callbackQuery){
    connect();
    connection.query("INSERT INTO nhanvien ( hoten, ngaysinh, chucvu) VALUES ('"+ hoten +"', '"+ ngaysinh +"', '"+ chucvu +"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
exports.insertCNHD = function({tieude,noidung,hinhanh},callbackQuery){
    connect();
    connection.query("INSERT INTO chucnanghoatdong (tieude,noidung,hinhanh) VALUES ( '"+ tieude +"', '"+ noidung +"','"+hinhanh+"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}

exports.insertTintucsukien = function({tieude,noidung,hinhanh},callbackQuery){
    connect();
    connection.query("INSERT INTO tintucsukien (tieude,noidung,hinhanh) VALUES ( '"+ tieude +"', '"+ noidung +"','"+hinhanh+"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
exports.insertSangiaodich = function({tieude,noidung,hinhanh},callbackQuery){
    connect();
    connection.query("INSERT INTO sangiaodich (tieude,noidung,hinhanh) VALUES ('"+ tieude +"', '"+ noidung +"','"+hinhanh+"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
exports.insertDichvu = function({tieude,noidung,hinhanh},callbackQuery){
    connect();
    connection.query("INSERT INTO dichvu (tieude,noidung,hinhanh) VALUES ( '"+ tieude +"', '"+ noidung +"','"+hinhanh+"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
exports.insertDiachi = function({tentinh,diachi,tel,fax},callbackQuery){
    connect();
    connection.query("INSERT INTO diachi (tentinh,diachi,tel,fax) VALUES ('"+ tentinh +"','"+ diachi +"','"+ tel +"','"+ fax +"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
exports.insertGioithieu = function({tieude,noidung,hinhanh},callbackQuery){
    connect();
    connection.query("INSERT INTO gioithieu (tieude,noidung,hinhanh) VALUES ('"+ tieude +"','"+ noidung +"','"+ hinhanh +"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
exports.insertKhachhang = function({tenkh,hinhanh,linkweb},callbackQuery){
    connect();
    connection.query("INSERT INTO khachhang (tenkh,hinhanh,linkweb) VALUES ('"+ tenkh +"','"+ hinhanh +"','"+ linkweb +"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
exports.insertSlider = function({hinhanh},callbackQuery){
    connect();
    connection.query("INSERT INTO slider (hinhanh) VALUES ('"+ hinhanh +"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
exports.insertTinnhan = function({hoten,email,sdt,congty,diachi,tieude,noidung},callbackQuery){
    connect();
    connection.query("INSERT INTO tinnhan (hoten,email,sdt,congty,diachi,tieude,noidung) VALUES ('"+ hoten +"','"+ email +"', '"+ sdt +"','"+ congty +"', '"+ diachi +"','"+ tieude +"', '"+ noidung +"');",function(err,results,fields){
        if(!err){
            callbackQuery(results);
        }
        else{
            console.log(err);
        }
    })
}
//================================================update============================================================//
exports.updateNhanvien = function({hoten,ngaysinh,chucvu,manv},callbackQuery){
    connect();
    connection.query("UPDATE nhanvien SET hoten = '"+ hoten +"',ngaysinh = '"+ ngaysinh +"', chucvu = '"+ chucvu +"' where manv = '"+ manv +"';",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}

exports.updateCNHD = function({tieude,noidung,hinhanh,macnhd},callbackQuery){
    connect();
    connection.query("UPDATE chucnanghoatdong SET tieude = '"+ tieude +"', noidung = '"+ noidung +"', hinhanh = '"+hinhanh+"' where macnhd = '"+ macnhd +"';",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.updateDichvu = function({tieude,noidung,hinhanh,madv},callbackQuery){
    connect();
    connection.query("UPDATE dichvu SET tieude = '"+ tieude +"', noidung = '"+ noidung +"', hinhanh = '"+hinhanh+"' where madv = '"+ madv +"';",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.updateTintucsukien = function({tieude,noidung,hinhanh,mattsk},callbackQuery){
    connect();
    connection.query("UPDATE tintucsukien SET tieude = '"+ tieude +"', noidung = '"+ noidung +"', hinhanh = '"+hinhanh+"' where mattsk = '"+ mattsk +"'",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.updateSangiaodich = function({tieude,noidung,hinhanh,masgd},callbackQuery){
    connect();
    connection.query("UPDATE sangiaodich SET tieude = '"+ tieude +"', noidung = '"+ noidung +"', hinhanh = '"+hinhanh+"' where masgd = '"+ masgd +"';",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.updateDiachi = function({tentinh,diachi,tel,fax,madc},callbackQuery){
    connect();
    connection.query("UPDATE diachi SET tentinh = '"+ tentinh +"',diachi = '"+ diachi +"', tel = '"+ tel +"', fax = '"+fax+"' where madc = '"+ madc +"';",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.updateGioithieu = function({tieude,noidung,hinhanh,magt},callbackQuery){
    connect();
    connection.query("UPDATE gioithieu SET tieude = '"+ tieude +"',noidung = '"+ noidung +"', hinhanh = '"+ hinhanh +"' where magt = '"+ magt +"';",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.updateKhachhang = function({tenkh,hinhanh,linkweb,makh},callbackQuery){
    connect();
    connection.query("UPDATE khachhang SET tenkh = '"+ tenkh +"', hinhanh = '"+ hinhanh +"', linkweb = '"+ linkweb +"' where makh = '"+ makh +"';",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.updateSlider = function({hinhanh,maslider},callbackQuery){
    connect();
    connection.query("UPDATE slider SET  hinhanh = '"+ hinhanh +"' where maslider = '"+ maslider +"';",function(error,results,fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
//=================================================delete=============================================================//
exports.deleteNhanVien = function(manv, callbackQuery){
    connect();
    connection.query("DELETE FROM nhanvien WHERE manv = '" + manv+ "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}

exports.deleteCNHD = function(macnhd, callbackQuery){
    connect();
    connection.query("DELETE FROM chucnanghoatdong WHERE macnhd = '" + macnhd+ "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.deleteDV = function(madv, callbackQuery){
    connect();
    connection.query("DELETE FROM dichvu WHERE madv = '" + madv+ "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.deleteTTSK = function(mattsk, callbackQuery){
    connect();
    connection.query("DELETE FROM tintucsukien WHERE mattsk = '" + mattsk+ "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.deleteSGD = function(masgd, callbackQuery){
    connect();
    connection.query("DELETE FROM sangiaodich WHERE masgd = '" + masgd+ "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.deleteDiachi = function(madc, callbackQuery){
    connect();
    connection.query("DELETE FROM diachi WHERE madc = '" + madc + "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.deleteGioithieu = function(magt, callbackQuery){
    connect();
    connection.query("DELETE FROM gioithieu WHERE magt = '" + magt + "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.deleteKhachhang = function(makh, callbackQuery){
    connect();
    connection.query("DELETE FROM khachhang WHERE makh = '" + makh + "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.deleteSlider = function(maslider, callbackQuery){
    connect();
    connection.query("DELETE FROM slider WHERE maslider = '" + maslider + "'",function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
//==============================================Lấy Từng Sản Phẩm=============================================================//
exports.DuanItem = function(madv_id, callbackQuery){
    connect();
    connection.query("SELECT * FROM DICHVU WHERE madv = ?",madv_id,function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
    exports.GioithieuItem = function(magt_id, callbackQuery){
        connect();
        connection.query("SELECT * FROM gioithieu WHERE magt = ?",magt_id,function(error, results, fields){
            if(!error){
                callbackQuery(results);
            }
            else{
                console.log(error);
            }
        })
}
exports.CNHDItem = function(macnhd_id, callbackQuery){
    connect();
    connection.query("SELECT * FROM chucnanghoatdong WHERE macnhd = ?",macnhd_id,function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.SGDItem = function(masgd_id, callbackQuery){
    connect();
    connection.query("SELECT * FROM sangiaodich WHERE masgd = ?",masgd_id,function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}
exports.TintucItem = function(mattsk_id, callbackQuery){
    connect();
    connection.query("SELECT * FROM tintucsukien WHERE mattsk = ?",mattsk_id,function(error, results, fields){
        if(!error){
            callbackQuery(results);
        }
        else{
            console.log(error);
        }
    })
}