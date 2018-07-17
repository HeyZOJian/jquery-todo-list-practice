$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12 ?
                    4 :
                    (i === 16 ?
                        (random & 3 | 8) :
                        random)).toString(16);
            }
            return uuid;
        }

        // add todo item

        $("#button").click(function () {
            var todoItem = $("input[name=ListItem]").val();
            // console.log(todoItem);
            todoItem = "<li id=" + generateUUID() + " class=\"\">" +
                "<input name=\"done-todo\" type=\"checkbox\" class=\"done-todo\">" + todoItem + "</li>"
            $("ol").append(todoItem);
        })

        // switch todo item status
        $(document).on("click", ".done-todo", function () {
            $(this).parent().toggleClass("checked");
        });

        // modify todo item
        $(document).on("click", "li", function () {
            var html = $(this).html().toString();
            var todoItemText = html.substr(html.indexOf(">"),html.length)
            // console.log(todoItemText);
            // $(this).replaceWith()
            $(this).attr('contentEditable', 'true');
        });

        // show all undone items
        $(".active").click(function () {
            $("li.checked").css("display", "none");
        })

        // show all items
        $(".all").click(function () {
            $("li.checked").css("display", "");
        })

    });