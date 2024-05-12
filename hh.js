$(document).ready(function() {
    // 录入学生信息
    $('#addForm').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var studentId = $('#studentId').val();
        var contact = $('#contact').val();
        $.post('/addStudent', {name: name, studentId: studentId, contact: contact}, function(response) {
            alert(response.message);
        });
    });

    // 删除学生信息
    $('#deleteForm').submit(function(event) {
        event.preventDefault();
        var studentId = $('#deleteStudentId').val();
        $.post('/deleteStudent', {studentId: studentId}, function(response) {
            alert(response.message);
        });
    });

    // 插入学生信息
    $('#insertForm').submit(function(event) {
        event.preventDefault();
        var position = $('#insertPosition').val();
        var name = $('#insertName').val();
        var studentId = $('#insertStudentId').val();
        var contact = $('#insertContact').val();
        $.post('/insertStudent', {position: position, name: name, studentId: studentId, contact: contact}, function(response) {
            alert(response.message);
        });
    });
});
