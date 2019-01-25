<template src="./CreateInvoice.html"></template>
<script>
  import Datepicker from 'vue2-datepicker';
  import InvoiceService from '../../services/invoice.service'
  import UserService from '../../services/user.service'
  
  const VAT = 0.23;
  
  let userService;
  let invoiceService;

  export default {
    data(){
      return {
        invoice: {
          number: this.generateInvoiceNumber(),
          creation_date: this.generateDate(0),
          sale_date: this.generateDate(0),
          due_date: this.generateDate(14),
          currency: '',
          payment_method: '',
          total_net_amount_cents: null,
          total_gross_amount_cents: null,
          user_id: null,
          invoice_line_items: [this.createFreshLineItemObject()]
        },
        currencies: {
          0: 'PLN',
          1: 'EUR',
          2: 'USD',
          3: 'GBP',
          4: 'SEK',
          5: 'CAD',
          6: 'JPY',
          7: 'DKK',
          8: 'CZK',
          9: 'NOK',
          10: 'HUF',
          11: 'AUD',
          12: 'UAH',
          13: 'CHF',
          14: 'RUB',
          15: 'ZAR',
          16: 'INR',
          17: 'NZD'
        },
        paymentMethods: {
          0: 'Transfer',
          1: 'Cash',
          2: 'Debit card',
          3: 'PayPal',
          4: 'PayU'
        }
      }
    },
    methods: {
      addLineItem() {
        this.invoice.invoice_line_items.push(this.createFreshLineItemObject())
      },
      generateInvoiceNumber() {
        let today = new Date()
        return today.toLocaleDateString("en-US")
      },
      generateDate(d) {
        Date.prototype.addDays = function(days) {
          let date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        }
        return new Date().addDays(d)
      },
      calcNetAndGrossAmounts(index) {
        let lineItem = this.invoice.invoice_line_items[index]
        lineItem.net_amount_cents = lineItem.price_net_cents * lineItem.quantity
        lineItem.gross_amount_cents = lineItem.net_amount_cents
        this.calcTotalAmount()
      },
      calcVAT(index) {
        let lineItem = this.invoice.invoice_line_items[index]
        lineItem.gross_amount_cents += lineItem.vat
        this.calcTotalAmount()
      },
      calcTotalAmount() {
        let totalAmount = this.invoice.invoice_line_items.reduce(function (accumulator, el) {
          return accumulator + el.gross_amount_cents;
        }, 0);
        this.invoice.total_gross_amount_cents = totalAmount
        this.invoice.total_net_amount_cents = totalAmount
      },
      submitInvoice() {
        invoiceService.create(this.invoice)
          .then(() => {
            this.$router.push({
              name: 'show-invoice'
            })
          })
      },
      createFreshLineItemObject() {
        return {
          name: '',
          quantity: 1,
          net_amount_cents: 0,
          gross_amount_cents: 0,
          vat: 0,
          price_net_cents: 0
        }
      }
    },
    created() {
      userService = new UserService()
      this.invoice.user_id = userService.fetchCurrentUser().id

      invoiceService = new InvoiceService()
    },
    components: { Datepicker }
  }
</script>
<style>
  .content-box {
    max-width: 1082px;
    margin-top: 34px;
    width: 100%;
    box-sizing: border-box;
  }

  .invoice-section {
    margin-top: 30px;
    margin-left: 1px;
  }

  .pop-label {
    color: #8899a6;
    font-size: 13px;
    font-weight: 300;
  }
</style>