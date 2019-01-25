<template src="./ShowInvoice.html"></template>
<script>
  import InvoiceService from '../../services/invoice.service'
  let invoiceService;

  export default {
    props: ['id'],
    data() {
      return {
        invoice: {}
      }
    },
    created() {
      invoiceService = new InvoiceService()
    }
  }
</script>