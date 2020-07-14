import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { expectancy } from "./life-expect.js";
import { currentAge } from './planet';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    currentAge(age);
    expectancy(Life, array1);
  })
});