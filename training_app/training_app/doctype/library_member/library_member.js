// Copyright (c) 2025, piyush and contributors
// For license information, please see license.txt
//     

       frappe.ui.form.on('library member' , {
            refresh :function(frm) {
                frm.add_custom_button('library transaction' , () =>{
                    frappe.new_doc('library transaction' , {
                        library_member:frm.doc.name
                    })
                })
            }
       })
      
    frappe.ui.form.on("library member" , {
        refresh:function(frm) {
            frm.add_custom_button("create membership" , () =>{
                frappe.new_doc("membership" , {
                    library_member:frm.doc.name
                })
            })
        }
    })

    