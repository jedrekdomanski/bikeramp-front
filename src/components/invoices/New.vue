<template src="./Form.html"></template>
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
          creation_date: this.generateInvoiceNumber(),
          sale_date: undefined,
          due_date: undefined,
          currency: '',
          payment_method: '',
          total_net_amount_cents: null,
          total_gross_amount_cents: null,
          payment_status: '',
          user_id: null,
          line_items: []
        }
      }
    },
    methods: {
      addLineItem() {
        this.invoice.line_items.push({
          name: '',
          quantity: null,
          net_amount_cents: null,
          gross_amount_cents: null,
          vat: null,
          price_net_cents: null
        })
      },
      generateInvoiceNumber() {
        let today = new Date()
        return today.toLocaleDateString("en-US")
      },
      calcNetAmount() {
        price_net_cents * quantity
      },
      calcGrossAmount() {
        amount = price_net_cents * quantity
        amount * VAT
      },
      submitInvoice() {

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