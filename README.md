TListBoxA2B
===========

Uma classe JS que ajuda na interação entre 2 objetos select MultiSelect onde o item selecionado em A deve ser enviado para B.

## Dependências

Este projeto depende da biblioteca [JQuery](https://github.com/jquery/jquery)

## Exemplo

```JavaScript
	var mngrListBox = new TListBoxA2B('btnAdd', 'btnDl', 'listBoxA', 'lisBoxB');
	mngrListBox.iniciar();
```

## Construtor

      Parâmetro    |                   Descrição
-------------------|---------------------------------------------
`idBtnAdd` 		   |  Identificador do botão de adicionar itens
`idBtnDel`         |  Identificador do botão de remover itens
`idListBoxSource`  |  Identificador do ListBox "A"
`idListBoxTo`      |  Identificador do ListBox "B"

## Eventos

`onAfterAdd`

Evento disparado após a adição de itens no ListBox "B"

```JavaScript
mngrListBox.onAfterAdd = function (items) {
                alert('Itens Adicionados');
            };
```

`onAfterDel`

Evento disparado após a remoção de itens no ListBox "B"

```JavaScript
mngrListBox.onAfterDel = function (items) {
                alert('Itens Removidos');
            };
```