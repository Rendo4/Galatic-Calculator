import './styles.css';
import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { expectancy } from "./life-expect.js";
import { currentAge, showAge, Planet, array1 } from './planet';
$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    currentAge(age);
    expectancy();
    showAge();
  });
});