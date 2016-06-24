$(document).ready(function() {
  var currentCalcField = $('#calcNum1'),
      currentTotal = 0,
      currentOperator = '+'

  $('#calcBtn').on('click', function() {
    var calcNum1 = Number($('#calcNum1').val())

    if (currentOperator === '+') {
      currentTotal = currentTotal + calcNum1
    }
    else if (currentOperator === '-') {
      currentTotal = currentTotal - calcNum1
    }
    else if (currentOperator === '/') {
      currentTotal = currentTotal / calcNum1
    }
    else if (currentOperator === '*') {
      currentTotal = currentTotal * calcNum1
    }

    $('#calcAnswerOutput').html(currentTotal)
  })

  $('#calcBtn1').on('click', function(){
    var calcBtnValue = 1

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn2').on('click', function(){
    var calcBtnValue = 2

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn3').on('click', function(){
    var calcBtnValue = 3

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn4').on('click', function(){
    var calcBtnValue = 4

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn5').on('click', function(){
    var calcBtnValue = 5

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn6').on('click', function(){
    var calcBtnValue = 6

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn7').on('click', function(){
    var calcBtnValue = 7

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn8').on('click', function(){
    var calcBtnValue = 8

    currentCalcField.val(calcBtnValue + currentCalcField.val())
  })
  $('#calcBtn9').on('click', function(){
    var calcBtnValue = 9

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtnC').on('click', function () {
    $('calcNum1').val('')
  })

  $('#calcBtnDecimal').on('click', function(){
    var calcBtnValue = '.'

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })

  $('#calcBtnPlus').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '+'
      currentTotal = currentTotal + Number(calcNum1.val())

    calcNum1.val('')
  })

  $('#calcBtnDivide').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '/'
      currentTotal = currentTotal + Number(calcNum1.val())

    calcNum1.val('')
  })
  $('#calcBtnMultiply').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '*'
      currentTotal = currentTotal + Number(calcNum1.val())

    calcNum1.val('')
  })
})
