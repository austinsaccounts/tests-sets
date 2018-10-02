import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import './sudoku.js';
import {backEnd} from './sudoku.js';
import $ from 'jquery';


$(document).ready(function(){
  backEnd();
});
