define(function(require) {
    'use strict';

    var ko = require('knockout');

    function CheckListViewModel(quiz) {
        this.quiz = quiz;

        this.currentQuestionIndex = ko.observable(0);
        this.currentAnswers = ko.observableArray();

        this.answers = ko.observable({});
    }

    CheckListViewModel.prototype.moveTo = function(index) {
        var answers = this.answers();
        var question = this.quiz.questions[this.currentQuestionIndex()];
        var newQuestion = this.quiz.questions[index];

        answers[question.id] = this.currentAnswers();
        this.answers(answers);

        if(newQuestion) {
            this.currentAnswers(answers[newQuestion.id] || []);
            this.currentQuestionIndex(index);
        }
    };

    return CheckListViewModel;
});