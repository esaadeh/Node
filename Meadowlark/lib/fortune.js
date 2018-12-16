// Created our own module to house the fortuneCookie functionality

// Arrray of fortunes...remains hidden and is accessed outside of this module via the below
var fortuneCookies = [ 'Conquer your fears or they will conquer you.', 'Rivers need springs', 'Do not fear what you don\'t know', 'You will have a pleasant surprise.', 'Whenever possible, keep it simple'];

// Global variable exports used to make getFortune visible outside of this module
exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};