/*
	TListBoxA2B - Uma classe JS que ajuda na interação entre 2 objetos select MultiSelect onde o item selecionado em A deve ser enviado para B.
	Desenvolvido por: Albert Sena Tanure / http://www.alberttanure.com
*/
function TListBoxA2B(idBtnAdd, idBtnDel, idListBoxSource, idListBoxTo) {
        
            var self = this;
            self.btnAdd = $('#' + idBtnAdd);
            self.btnDel = $('#' + idBtnDel);
            self.lbSource = $('#' + idListBoxSource);
            self.lbTo = $('#' + idListBoxTo);


            this.iniciar = function () {
                self.btnAdd.unbind('click');
                self.btnAdd.click(function () {
                    AddSelectedItems();
                });

                self.btnDel.unbind('click');
                self.btnDel.click(function () {
                    DelSelectedItems();
                });
            };

            var AddSelectedItems = function () {
                var selectedOptions = self.lbSource.find('option:selected');
                var items = [];
                selectedOptions.each(function () {
                    items.push($(this).clone());
                    $(this).remove().appendTo(self.lbTo);
                });

                self.lbSource.find('option').sort(function (a, b) {
                    sortElement(a, b)
                });

                self.onAfterAdd(items);
            };

            var DelSelectedItems = function () {
                var selectedOptions = self.lbTo.find('option:selected');
                var items = [];
                selectedOptions.each(function () {
                    items.push($(this).clone());
                    $(this).remove().appendTo(self.lbSource);
                });

                self.lbTo.find('option').sort(function (a, b) {
                    sortElement(a, b)
                });

                self.onAfterDel(items);
            };

            var sortElement = function (a, b) {
                var compA = $(a).text().toUpperCase();

                var compB = $(b).text().toUpperCase();

                return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
            };

            this.onAfterAdd = function (items) { };

            this.onAfterDel = function (items) { };
        }