/**
 * Stripe API
 * 2020-08-27
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
  baseUrl: "https://api.stripe.com/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
  server1: "https://api.stripe.com/",
};
export type Address = {
  city?: string | null;
  country?: string | null;
  line1?: string | null;
  line2?: string | null;
  postal_code?: string | null;
  state?: string | null;
};
export type AccountBusinessProfile = {
  mcc?: string | null;
  name?: string | null;
  product_description?: string | null;
  support_address?: Address | null;
  support_email?: string | null;
  support_phone?: string | null;
  support_url?: string | null;
  url?: string | null;
};
export type AccountCapabilities = {
  au_becs_debit_payments?: "active" | "inactive" | "pending";
  bacs_debit_payments?: "active" | "inactive" | "pending";
  bancontact_payments?: "active" | "inactive" | "pending";
  card_issuing?: "active" | "inactive" | "pending";
  card_payments?: "active" | "inactive" | "pending";
  cartes_bancaires_payments?: "active" | "inactive" | "pending";
  eps_payments?: "active" | "inactive" | "pending";
  fpx_payments?: "active" | "inactive" | "pending";
  giropay_payments?: "active" | "inactive" | "pending";
  grabpay_payments?: "active" | "inactive" | "pending";
  ideal_payments?: "active" | "inactive" | "pending";
  jcb_payments?: "active" | "inactive" | "pending";
  legacy_payments?: "active" | "inactive" | "pending";
  oxxo_payments?: "active" | "inactive" | "pending";
  p24_payments?: "active" | "inactive" | "pending";
  sepa_debit_payments?: "active" | "inactive" | "pending";
  sofort_payments?: "active" | "inactive" | "pending";
  tax_reporting_us_1099_k?: "active" | "inactive" | "pending";
  tax_reporting_us_1099_misc?: "active" | "inactive" | "pending";
  transfers?: "active" | "inactive" | "pending";
};
export type LegalEntityJapanAddress = {
  city?: string | null;
  country?: string | null;
  line1?: string | null;
  line2?: string | null;
  postal_code?: string | null;
  state?: string | null;
  town?: string | null;
};
export type FileLink = {
  created: number;
  expired: boolean;
  expires_at?: number | null;
  file: string | File;
  id: string;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "file_link";
  url?: string | null;
};
export type File = {
  created: number;
  expires_at?: number | null;
  filename?: string | null;
  id: string;
  links?: {
    data: FileLink[];
    has_more: boolean;
    object: "list";
    url: string;
  } | null;
  object: "file";
  purpose:
    | "additional_verification"
    | "business_icon"
    | "business_logo"
    | "customer_signature"
    | "dispute_evidence"
    | "identity_document"
    | "pci_document"
    | "tax_document_user_upload";
  size: number;
  title?: string | null;
  type?: string | null;
  url?: string | null;
};
export type LegalEntityCompanyVerificationDocument = {
  back?: (string | File) | null;
  details?: string | null;
  details_code?: string | null;
  front?: (string | File) | null;
};
export type LegalEntityCompanyVerification = {
  document: LegalEntityCompanyVerificationDocument;
};
export type LegalEntityCompany = {
  address?: Address;
  address_kana?: LegalEntityJapanAddress | null;
  address_kanji?: LegalEntityJapanAddress | null;
  directors_provided?: boolean;
  executives_provided?: boolean;
  name?: string | null;
  name_kana?: string | null;
  name_kanji?: string | null;
  owners_provided?: boolean;
  phone?: string | null;
  structure?:
    | "government_instrumentality"
    | "governmental_unit"
    | "incorporated_non_profit"
    | "limited_liability_partnership"
    | "multi_member_llc"
    | "private_company"
    | "private_corporation"
    | "private_partnership"
    | "public_company"
    | "public_corporation"
    | "public_partnership"
    | "sole_proprietorship"
    | "tax_exempt_government_instrumentality"
    | "unincorporated_association"
    | "unincorporated_non_profit";
  tax_id_provided?: boolean;
  tax_id_registrar?: string;
  vat_id_provided?: boolean;
  verification?: LegalEntityCompanyVerification | null;
};
export type DeletedCustomer = {
  deleted: true;
  id: string;
  object: "customer";
};
export type AlipayAccount = {
  created: number;
  customer?: (string | Customer | DeletedCustomer) | null;
  fingerprint: string;
  id: string;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  };
  object: "alipay_account";
  payment_amount?: number | null;
  payment_currency?: string | null;
  reusable: boolean;
  used: boolean;
  username: string;
};
export type BitcoinTransaction = {
  amount: number;
  bitcoin_amount: number;
  created: number;
  currency: string;
  id: string;
  object: "bitcoin_transaction";
  receiver: string;
};
export type BitcoinReceiver = {
  active: boolean;
  amount: number;
  amount_received: number;
  bitcoin_amount: number;
  bitcoin_amount_received: number;
  bitcoin_uri: string;
  created: number;
  currency: string;
  customer?: string | null;
  description?: string | null;
  email?: string | null;
  filled: boolean;
  id: string;
  inbound_address: string;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "bitcoin_receiver";
  payment?: string | null;
  refund_address?: string | null;
  transactions?: {
    data: BitcoinTransaction[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  uncaptured_funds: boolean;
  used_for_payment?: boolean | null;
};
export type Source_type_ach_credit_transfer = {
  account_number?: string | null;
  bank_name?: string | null;
  fingerprint?: string | null;
  refund_account_holder_name?: string | null;
  refund_account_holder_type?: string | null;
  refund_routing_number?: string | null;
  routing_number?: string | null;
  swift_code?: string | null;
};
export type Source_type_ach_debit = {
  bank_name?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  routing_number?: string | null;
  type?: string | null;
};
export type Source_type_alipay = {
  data_string?: string | null;
  native_url?: string | null;
  statement_descriptor?: string | null;
};
export type Source_type_au_becs_debit = {
  bsb_number?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
};
export type Source_type_bancontact = {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  iban_last4?: string | null;
  preferred_language?: string | null;
  statement_descriptor?: string | null;
};
export type Source_type_card = {
  address_line1_check?: string | null;
  address_zip_check?: string | null;
  brand?: string | null;
  country?: string | null;
  cvc_check?: string | null;
  dynamic_last4?: string | null;
  exp_month?: number | null;
  exp_year?: number | null;
  fingerprint?: string;
  funding?: string | null;
  last4?: string | null;
  name?: string | null;
  three_d_secure?: string;
  tokenization_method?: string | null;
};
export type Source_type_card_present = {
  application_cryptogram?: string;
  application_preferred_name?: string;
  authorization_code?: string | null;
  authorization_response_code?: string;
  brand?: string | null;
  country?: string | null;
  cvm_type?: string;
  data_type?: string | null;
  dedicated_file_name?: string;
  emv_auth_data?: string;
  evidence_customer_signature?: string | null;
  evidence_transaction_certificate?: string | null;
  exp_month?: number | null;
  exp_year?: number | null;
  fingerprint?: string;
  funding?: string | null;
  last4?: string | null;
  pos_device_id?: string | null;
  pos_entry_mode?: string;
  read_method?: string | null;
  reader?: string | null;
  terminal_verification_results?: string;
  transaction_status_information?: string;
};
export type SourceCodeVerificationFlow = {
  attempts_remaining: number;
  status: string;
};
export type Source_type_eps = {
  reference?: string | null;
  statement_descriptor?: string | null;
};
export type Source_type_giropay = {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  statement_descriptor?: string | null;
};
export type Source_type_ideal = {
  bank?: string | null;
  bic?: string | null;
  iban_last4?: string | null;
  statement_descriptor?: string | null;
};
export type Source_type_klarna = {
  background_image_url?: string;
  client_token?: string | null;
  first_name?: string;
  last_name?: string;
  locale?: string;
  logo_url?: string;
  page_title?: string;
  pay_later_asset_urls_descriptive?: string;
  pay_later_asset_urls_standard?: string;
  pay_later_name?: string;
  pay_later_redirect_url?: string;
  pay_now_asset_urls_descriptive?: string;
  pay_now_asset_urls_standard?: string;
  pay_now_name?: string;
  pay_now_redirect_url?: string;
  pay_over_time_asset_urls_descriptive?: string;
  pay_over_time_asset_urls_standard?: string;
  pay_over_time_name?: string;
  pay_over_time_redirect_url?: string;
  payment_method_categories?: string;
  purchase_country?: string;
  purchase_type?: string;
  redirect_url?: string;
  shipping_delay?: number;
  shipping_first_name?: string;
  shipping_last_name?: string;
};
export type Source_type_multibanco = {
  entity?: string | null;
  reference?: string | null;
  refund_account_holder_address_city?: string | null;
  refund_account_holder_address_country?: string | null;
  refund_account_holder_address_line1?: string | null;
  refund_account_holder_address_line2?: string | null;
  refund_account_holder_address_postal_code?: string | null;
  refund_account_holder_address_state?: string | null;
  refund_account_holder_name?: string | null;
  refund_iban?: string | null;
};
export type SourceOwner = {
  address?: Address | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  verified_address?: Address | null;
  verified_email?: string | null;
  verified_name?: string | null;
  verified_phone?: string | null;
};
export type Source_type_p24 = {
  reference?: string | null;
};
export type SourceReceiverFlow = {
  address?: string | null;
  amount_charged: number;
  amount_received: number;
  amount_returned: number;
  refund_attributes_method: string;
  refund_attributes_status: string;
};
export type SourceRedirectFlow = {
  failure_reason?: string | null;
  return_url: string;
  status: string;
  url: string;
};
export type Source_type_sepa_debit = {
  bank_code?: string | null;
  branch_code?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  mandate_reference?: string | null;
  mandate_url?: string | null;
};
export type Source_type_sofort = {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  country?: string | null;
  iban_last4?: string | null;
  preferred_language?: string | null;
  statement_descriptor?: string | null;
};
export type SourceOrderItem = {
  amount?: number | null;
  currency?: string | null;
  description?: string | null;
  parent?: string | null;
  quantity?: number;
  type?: string | null;
};
export type Shipping = {
  address?: Address;
  carrier?: string | null;
  name?: string | null;
  phone?: string | null;
  tracking_number?: string | null;
};
export type SourceOrder = {
  amount: number;
  currency: string;
  email?: string;
  items?: SourceOrderItem[] | null;
  shipping?: Shipping;
};
export type Source_type_three_d_secure = {
  address_line1_check?: string | null;
  address_zip_check?: string | null;
  authenticated?: boolean | null;
  brand?: string | null;
  card?: string | null;
  country?: string | null;
  customer?: string | null;
  cvc_check?: string | null;
  dynamic_last4?: string | null;
  exp_month?: number | null;
  exp_year?: number | null;
  fingerprint?: string;
  funding?: string | null;
  last4?: string | null;
  name?: string | null;
  three_d_secure?: string;
  tokenization_method?: string | null;
};
export type Source_type_wechat = {
  prepay_id?: string;
  qr_code_url?: string | null;
  statement_descriptor?: string;
};
export type Source = {
  ach_credit_transfer?: Source_type_ach_credit_transfer;
  ach_debit?: Source_type_ach_debit;
  alipay?: Source_type_alipay;
  amount?: number | null;
  au_becs_debit?: Source_type_au_becs_debit;
  bancontact?: Source_type_bancontact;
  card?: Source_type_card;
  card_present?: Source_type_card_present;
  client_secret: string;
  code_verification?: SourceCodeVerificationFlow;
  created: number;
  currency?: string | null;
  customer?: string;
  eps?: Source_type_eps;
  flow: string;
  giropay?: Source_type_giropay;
  id: string;
  ideal?: Source_type_ideal;
  klarna?: Source_type_klarna;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  multibanco?: Source_type_multibanco;
  object: "source";
  owner?: SourceOwner | null;
  p24?: Source_type_p24;
  receiver?: SourceReceiverFlow;
  redirect?: SourceRedirectFlow;
  sepa_debit?: Source_type_sepa_debit;
  sofort?: Source_type_sofort;
  source_order?: SourceOrder;
  statement_descriptor?: string | null;
  status: string;
  three_d_secure?: Source_type_three_d_secure;
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "alipay"
    | "au_becs_debit"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
  usage?: string | null;
  wechat?: Source_type_wechat;
};
export type CouponAppliesTo = {
  products: string[];
};
export type Coupon = {
  amount_off?: number | null;
  applies_to?: CouponAppliesTo;
  created: number;
  currency?: string | null;
  duration: "forever" | "once" | "repeating";
  duration_in_months?: number | null;
  id: string;
  livemode: boolean;
  max_redemptions?: number | null;
  metadata?: {
    [key: string]: string;
  } | null;
  name?: string | null;
  object: "coupon";
  percent_off?: number | null;
  redeem_by?: number | null;
  times_redeemed: number;
  valid: boolean;
};
export type PromotionCodesResourceRestrictions = {
  first_time_transaction: boolean;
  minimum_amount?: number | null;
  minimum_amount_currency?: string | null;
};
export type PromotionCode = {
  active: boolean;
  code: string;
  coupon: Coupon;
  created: number;
  customer?: (string | Customer | DeletedCustomer) | null;
  expires_at?: number | null;
  id: string;
  livemode: boolean;
  max_redemptions?: number | null;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "promotion_code";
  restrictions: PromotionCodesResourceRestrictions;
  times_redeemed: number;
};
export type Discount = {
  checkout_session?: string | null;
  coupon: Coupon;
  customer?: (string | Customer | DeletedCustomer) | null;
  end?: number | null;
  id: string;
  invoice?: string | null;
  invoice_item?: string | null;
  object: "discount";
  promotion_code?: (string | PromotionCode) | null;
  start: number;
  subscription?: string | null;
};
export type InvoiceSettingCustomField = {
  name: string;
  value: string;
};
export type PaymentFlowsPrivatePaymentMethodsAlipay = {};
export type Payment_method_au_becs_debit = {
  bsb_number?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
};
export type Payment_method_bacs_debit = {
  fingerprint?: string | null;
  last4?: string | null;
  sort_code?: string | null;
};
export type Payment_method_bancontact = {};
export type Billing_details = {
  address?: Address | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
export type Payment_method_card_checks = {
  address_line1_check?: string | null;
  address_postal_code_check?: string | null;
  cvc_check?: string | null;
};
export type Payment_method_details_card_present_receipt = {
  account_type?: "checking" | "credit" | "prepaid" | "unknown";
  application_cryptogram?: string | null;
  application_preferred_name?: string | null;
  authorization_code?: string | null;
  authorization_response_code?: string | null;
  cardholder_verification_method?: string | null;
  dedicated_file_name?: string | null;
  terminal_verification_results?: string | null;
  transaction_status_information?: string | null;
};
export type Payment_method_details_card_present = {
  brand?: string | null;
  cardholder_name?: string | null;
  country?: string | null;
  emv_auth_data?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding?: string | null;
  generated_card?: string | null;
  last4?: string | null;
  network?: string | null;
  read_method?:
    | (
        | "contact_emv"
        | "contactless_emv"
        | "contactless_magstripe_mode"
        | "magnetic_stripe_fallback"
        | "magnetic_stripe_track2"
      )
    | null;
  receipt?: Payment_method_details_card_present_receipt | null;
};
export type Card_generated_from_payment_method_details = {
  card_present?: Payment_method_details_card_present;
  type: string;
};
export type Payment_method_card_generated_card = {
  charge?: string | null;
  payment_method_details?: Card_generated_from_payment_method_details | null;
};
export type Networks = {
  available: string[];
  preferred?: string | null;
};
export type Three_d_secure_usage = {
  supported: boolean;
};
export type Payment_method_card_wallet_amex_express_checkout = {};
export type Payment_method_card_wallet_apple_pay = {};
export type Payment_method_card_wallet_google_pay = {};
export type Payment_method_card_wallet_masterpass = {
  billing_address?: Address | null;
  email?: string | null;
  name?: string | null;
  shipping_address?: Address | null;
};
export type Payment_method_card_wallet_samsung_pay = {};
export type Payment_method_card_wallet_visa_checkout = {
  billing_address?: Address | null;
  email?: string | null;
  name?: string | null;
  shipping_address?: Address | null;
};
export type Payment_method_card_wallet = {
  amex_express_checkout?: Payment_method_card_wallet_amex_express_checkout;
  apple_pay?: Payment_method_card_wallet_apple_pay;
  dynamic_last4?: string | null;
  google_pay?: Payment_method_card_wallet_google_pay;
  masterpass?: Payment_method_card_wallet_masterpass;
  samsung_pay?: Payment_method_card_wallet_samsung_pay;
  type:
    | "amex_express_checkout"
    | "apple_pay"
    | "google_pay"
    | "masterpass"
    | "samsung_pay"
    | "visa_checkout";
  visa_checkout?: Payment_method_card_wallet_visa_checkout;
};
export type Payment_method_card = {
  brand: string;
  checks?: Payment_method_card_checks | null;
  country?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding: string;
  generated_from?: Payment_method_card_generated_card | null;
  last4: string;
  networks?: Networks | null;
  three_d_secure_usage?: Three_d_secure_usage | null;
  wallet?: Payment_method_card_wallet | null;
};
export type Payment_method_card_present = {};
export type Payment_method_eps = {};
export type Payment_method_fpx = {
  bank:
    | "affin_bank"
    | "alliance_bank"
    | "ambank"
    | "bank_islam"
    | "bank_muamalat"
    | "bank_rakyat"
    | "bsn"
    | "cimb"
    | "deutsche_bank"
    | "hong_leong_bank"
    | "hsbc"
    | "kfh"
    | "maybank2e"
    | "maybank2u"
    | "ocbc"
    | "pb_enterprise"
    | "public_bank"
    | "rhb"
    | "standard_chartered"
    | "uob";
};
export type Payment_method_giropay = {};
export type Payment_method_grabpay = {};
export type Payment_method_ideal = {
  bank?:
    | (
        | "abn_amro"
        | "asn_bank"
        | "bunq"
        | "handelsbanken"
        | "ing"
        | "knab"
        | "moneyou"
        | "rabobank"
        | "regiobank"
        | "sns_bank"
        | "triodos_bank"
        | "van_lanschot"
      )
    | null;
  bic?:
    | (
        | "ABNANL2A"
        | "ASNBNL21"
        | "BUNQNL2A"
        | "FVLBNL22"
        | "HANDNL2A"
        | "INGBNL2A"
        | "KNABNL2H"
        | "MOYONL21"
        | "RABONL2U"
        | "RBRBNL21"
        | "SNSBNL2A"
        | "TRIONL2U"
      )
    | null;
};
export type Payment_method_interac_present = {};
export type Payment_method_oxxo = {};
export type Payment_method_p24 = {
  bank?:
    | (
        | "alior_bank"
        | "bank_millennium"
        | "bank_nowy_bfg_sa"
        | "bank_pekao_sa"
        | "banki_spbdzielcze"
        | "blik"
        | "bnp_paribas"
        | "boz"
        | "citi_handlowy"
        | "credit_agricole"
        | "envelobank"
        | "etransfer_pocztowy24"
        | "getin_bank"
        | "ideabank"
        | "ing"
        | "inteligo"
        | "mbank_mtransfer"
        | "nest_przelew"
        | "noble_pay"
        | "pbac_z_ipko"
        | "plus_bank"
        | "santander_przelew24"
        | "tmobile_usbugi_bankowe"
        | "toyota_bank"
        | "volkswagen_bank"
      )
    | null;
};
export type Application = {
  id: string;
  name?: string | null;
  object: "application";
};
export type Fee = {
  amount: number;
  application?: string | null;
  currency: string;
  description?: string | null;
  type: string;
};
export type ConnectCollectionTransfer = {
  amount: number;
  currency: string;
  destination: string | Account;
  id: string;
  livemode: boolean;
  object: "connect_collection_transfer";
};
export type DisputeEvidence = {
  access_activity_log?: string | null;
  billing_address?: string | null;
  cancellation_policy?: (string | File) | null;
  cancellation_policy_disclosure?: string | null;
  cancellation_rebuttal?: string | null;
  customer_communication?: (string | File) | null;
  customer_email_address?: string | null;
  customer_name?: string | null;
  customer_purchase_ip?: string | null;
  customer_signature?: (string | File) | null;
  duplicate_charge_documentation?: (string | File) | null;
  duplicate_charge_explanation?: string | null;
  duplicate_charge_id?: string | null;
  product_description?: string | null;
  receipt?: (string | File) | null;
  refund_policy?: (string | File) | null;
  refund_policy_disclosure?: string | null;
  refund_refusal_explanation?: string | null;
  service_date?: string | null;
  service_documentation?: (string | File) | null;
  shipping_address?: string | null;
  shipping_carrier?: string | null;
  shipping_date?: string | null;
  shipping_documentation?: (string | File) | null;
  shipping_tracking_number?: string | null;
  uncategorized_file?: (string | File) | null;
  uncategorized_text?: string | null;
};
export type DisputeEvidenceDetails = {
  due_by?: number | null;
  has_evidence: boolean;
  past_due: boolean;
  submission_count: number;
};
export type Tax_id_verification = {
  status: "pending" | "unavailable" | "unverified" | "verified";
  verified_address?: string | null;
  verified_name?: string | null;
};
export type Tax_id = {
  country?: string | null;
  created: number;
  customer?: (string | Customer) | null;
  id: string;
  livemode: boolean;
  object: "tax_id";
  type:
    | "ae_trn"
    | "au_abn"
    | "br_cnpj"
    | "br_cpf"
    | "ca_bn"
    | "ca_qst"
    | "ch_vat"
    | "cl_tin"
    | "es_cif"
    | "eu_vat"
    | "hk_br"
    | "id_npwp"
    | "in_gst"
    | "jp_cn"
    | "jp_rn"
    | "kr_brn"
    | "li_uid"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "no_vat"
    | "nz_gst"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "th_vat"
    | "tw_vat"
    | "unknown"
    | "us_ein"
    | "za_vat";
  value: string;
  verification?: Tax_id_verification | null;
};
export type Deleted_tax_id = {
  deleted: true;
  id: string;
  object: "tax_id";
};
export type InvoicesResourceInvoiceTaxID = {
  type:
    | "ae_trn"
    | "au_abn"
    | "br_cnpj"
    | "br_cpf"
    | "ca_bn"
    | "ca_qst"
    | "ch_vat"
    | "cl_tin"
    | "es_cif"
    | "eu_vat"
    | "hk_br"
    | "id_npwp"
    | "in_gst"
    | "jp_cn"
    | "jp_rn"
    | "kr_brn"
    | "li_uid"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "no_vat"
    | "nz_gst"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "th_vat"
    | "tw_vat"
    | "unknown"
    | "us_ein"
    | "za_vat";
  value?: string | null;
};
export type TaxRate = {
  active: boolean;
  created: number;
  description?: string | null;
  display_name: string;
  id: string;
  inclusive: boolean;
  jurisdiction?: string | null;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "tax_rate";
  percentage: number;
};
export type DeletedDiscount = {
  checkout_session?: string | null;
  coupon: Coupon;
  customer?: (string | Customer | DeletedCustomer) | null;
  deleted: true;
  id: string;
  invoice?: string | null;
  invoice_item?: string | null;
  object: "discount";
  promotion_code?: (string | PromotionCode) | null;
  start: number;
  subscription?: string | null;
};
export type Offline_acceptance = {};
export type Online_acceptance = {
  ip_address?: string | null;
  user_agent?: string | null;
};
export type Customer_acceptance = {
  accepted_at?: number | null;
  offline?: Offline_acceptance;
  online?: Online_acceptance;
  type: "offline" | "online";
};
export type Mandate_multi_use = {};
export type Mandate_au_becs_debit = {
  url: string;
};
export type Mandate_bacs_debit = {
  network_status: "accepted" | "pending" | "refused" | "revoked";
  reference: string;
  url: string;
};
export type Card_mandate_payment_method_details = {};
export type Mandate_sepa_debit = {
  reference: string;
  url: string;
};
export type Mandate_payment_method_details = {
  au_becs_debit?: Mandate_au_becs_debit;
  bacs_debit?: Mandate_bacs_debit;
  card?: Card_mandate_payment_method_details;
  sepa_debit?: Mandate_sepa_debit;
  type: string;
};
export type Mandate_single_use = {
  amount: number;
  currency: string;
};
export type Mandate = {
  customer_acceptance: Customer_acceptance;
  id: string;
  livemode: boolean;
  multi_use?: Mandate_multi_use;
  object: "mandate";
  payment_method: string | PaymentMethod;
  payment_method_details: Mandate_payment_method_details;
  single_use?: Mandate_single_use;
  status: "active" | "inactive" | "pending";
  type: "multi_use" | "single_use";
};
export type Setup_attempt_payment_method_details_bancontact = {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  generated_sepa_debit?: (string | PaymentMethod) | null;
  generated_sepa_debit_mandate?: (string | Mandate) | null;
  iban_last4?: string | null;
  preferred_language?: ("de" | "en" | "fr" | "nl") | null;
  verified_name?: string | null;
};
export type Three_d_secure_details = {
  authentication_flow?: ("challenge" | "frictionless") | null;
  result:
    | "attempt_acknowledged"
    | "authenticated"
    | "failed"
    | "not_supported"
    | "processing_error";
  result_reason?:
    | (
        | "abandoned"
        | "bypassed"
        | "canceled"
        | "card_not_enrolled"
        | "network_not_supported"
        | "protocol_error"
        | "rejected"
      )
    | null;
  version: "1.0.2" | "2.1.0" | "2.2.0";
};
export type Setup_attempt_payment_method_details_card = {
  three_d_secure?: Three_d_secure_details | null;
};
export type Setup_attempt_payment_method_details_ideal = {
  bank?:
    | (
        | "abn_amro"
        | "asn_bank"
        | "bunq"
        | "handelsbanken"
        | "ing"
        | "knab"
        | "moneyou"
        | "rabobank"
        | "regiobank"
        | "sns_bank"
        | "triodos_bank"
        | "van_lanschot"
      )
    | null;
  bic?:
    | (
        | "ABNANL2A"
        | "ASNBNL21"
        | "BUNQNL2A"
        | "FVLBNL22"
        | "HANDNL2A"
        | "INGBNL2A"
        | "KNABNL2H"
        | "MOYONL21"
        | "RABONL2U"
        | "RBRBNL21"
        | "SNSBNL2A"
        | "TRIONL2U"
      )
    | null;
  generated_sepa_debit?: (string | PaymentMethod) | null;
  generated_sepa_debit_mandate?: (string | Mandate) | null;
  iban_last4?: string | null;
  verified_name?: string | null;
};
export type Setup_attempt_payment_method_details_sofort = {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  generated_sepa_debit?: (string | PaymentMethod) | null;
  generated_sepa_debit_mandate?: (string | Mandate) | null;
  iban_last4?: string | null;
  preferred_language?: ("de" | "en" | "fr" | "nl") | null;
  verified_name?: string | null;
};
export type SetupAttemptPaymentMethodDetails = {
  bancontact?: Setup_attempt_payment_method_details_bancontact;
  card?: Setup_attempt_payment_method_details_card;
  ideal?: Setup_attempt_payment_method_details_ideal;
  sofort?: Setup_attempt_payment_method_details_sofort;
  type: string;
};
export type PaymentFlowsSetupIntentSetupAttempt = {
  application?: (string | Application) | null;
  created: number;
  customer?: (string | Customer | DeletedCustomer) | null;
  id: string;
  livemode: boolean;
  object: "setup_attempt";
  on_behalf_of?: (string | Account) | null;
  payment_method: string | PaymentMethod;
  payment_method_details: SetupAttemptPaymentMethodDetails;
  setup_error?: APIErrors | null;
  setup_intent: string | SetupIntent;
  status: string;
  usage: string;
};
export type SetupIntentNextActionRedirectToUrl = {
  return_url?: string | null;
  url?: string | null;
};
export type SetupIntentNextAction = {
  redirect_to_url?: SetupIntentNextActionRedirectToUrl;
  type: string;
  use_stripe_sdk?: object;
};
export type Setup_intent_payment_method_options_card = {
  request_three_d_secure?: ("any" | "automatic" | "challenge_only") | null;
};
export type Setup_intent_payment_method_options_mandate_options_sepa_debit = {};
export type Setup_intent_payment_method_options_sepa_debit = {
  mandate_options?: Setup_intent_payment_method_options_mandate_options_sepa_debit;
};
export type SetupIntentPaymentMethodOptions = {
  card?: Setup_intent_payment_method_options_card;
  sepa_debit?: Setup_intent_payment_method_options_sepa_debit;
};
export type SetupIntent = {
  application?: (string | Application) | null;
  cancellation_reason?:
    | ("abandoned" | "duplicate" | "requested_by_customer")
    | null;
  client_secret?: string | null;
  created: number;
  customer?: (string | Customer | DeletedCustomer) | null;
  description?: string | null;
  id: string;
  last_setup_error?: APIErrors | null;
  latest_attempt?: (string | PaymentFlowsSetupIntentSetupAttempt) | null;
  livemode: boolean;
  mandate?: (string | Mandate) | null;
  metadata?: {
    [key: string]: string;
  } | null;
  next_action?: SetupIntentNextAction | null;
  object: "setup_intent";
  on_behalf_of?: (string | Account) | null;
  payment_method?: (string | PaymentMethod) | null;
  payment_method_options?: SetupIntentPaymentMethodOptions | null;
  payment_method_types: string[];
  single_use_mandate?: (string | Mandate) | null;
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  usage: string;
};
export type APIErrors = {
  charge?: string;
  code?: string;
  decline_code?: string;
  doc_url?: string;
  message?: string;
  param?: string;
  payment_intent?: PaymentIntent;
  payment_method?: PaymentMethod;
  payment_method_type?: string;
  setup_intent?: SetupIntent;
  source?: BankAccount | Card | Source;
  type:
    | "api_connection_error"
    | "api_error"
    | "authentication_error"
    | "card_error"
    | "idempotency_error"
    | "invalid_request_error"
    | "rate_limit_error";
};
export type DiscountsResourceDiscountAmount = {
  amount: number;
  discount: string | Discount | DeletedDiscount;
};
export type InvoiceLineItemPeriod = {
  end: number;
  start: number;
};
export type PackageDimensions = {
  height: number;
  length: number;
  weight: number;
  width: number;
};
export type Product = {
  active: boolean;
  attributes?: string[] | null;
  caption?: string | null;
  created: number;
  deactivate_on?: string[];
  description?: string | null;
  id: string;
  images: string[];
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  name: string;
  object: "product";
  package_dimensions?: PackageDimensions | null;
  shippable?: boolean | null;
  statement_descriptor?: string | null;
  unit_label?: string | null;
  updated: number;
  url?: string | null;
};
export type DeletedProduct = {
  deleted: true;
  id: string;
  object: "product";
};
export type Recurring = {
  aggregate_usage?: ("last_during_period" | "last_ever" | "max" | "sum") | null;
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
  usage_type: "licensed" | "metered";
};
export type PriceTier = {
  flat_amount?: number | null;
  flat_amount_decimal?: string | null;
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
  up_to?: number | null;
};
export type TransformQuantity = {
  divide_by: number;
  round: "down" | "up";
};
export type Price = {
  active: boolean;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  lookup_key?: string | null;
  metadata: {
    [key: string]: string;
  };
  nickname?: string | null;
  object: "price";
  product: string | Product | DeletedProduct;
  recurring?: Recurring | null;
  tiers?: PriceTier[];
  tiers_mode?: ("graduated" | "volume") | null;
  transform_quantity?: TransformQuantity | null;
  type: "one_time" | "recurring";
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
};
export type InvoiceTaxAmount = {
  amount: number;
  inclusive: boolean;
  tax_rate: string | TaxRate;
};
export type InvoiceLineItem = {
  amount: number;
  currency: string;
  description?: string | null;
  discount_amounts?: DiscountsResourceDiscountAmount[] | null;
  discountable: boolean;
  discounts?: (string | Discount)[] | null;
  id: string;
  invoice_item?: string;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "line_item";
  period: InvoiceLineItemPeriod;
  price?: Price | null;
  proration: boolean;
  quantity?: number | null;
  subscription?: string | null;
  subscription_item?: string;
  tax_amounts?: InvoiceTaxAmount[];
  tax_rates?: TaxRate[];
  type: "invoiceitem" | "subscription";
};
export type InvoicesStatusTransitions = {
  finalized_at?: number | null;
  marked_uncollectible_at?: number | null;
  paid_at?: number | null;
  voided_at?: number | null;
};
export type SubscriptionBillingThresholds = {
  amount_gte?: number | null;
  reset_billing_cycle_anchor?: boolean | null;
};
export type SubscriptionItemBillingThresholds = {
  usage_gte?: number | null;
};
export type SubscriptionItem = {
  billing_thresholds?: SubscriptionItemBillingThresholds | null;
  created: number;
  id: string;
  metadata: {
    [key: string]: string;
  };
  object: "subscription_item";
  price: Price;
  quantity?: number;
  subscription: string;
  tax_rates?: TaxRate[] | null;
};
export type SubscriptionsResourcePauseCollection = {
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  resumes_at?: number | null;
};
export type SubscriptionPendingInvoiceItemInterval = {
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
};
export type SubscriptionsResourcePendingUpdate = {
  billing_cycle_anchor?: number | null;
  expires_at: number;
  subscription_items?: SubscriptionItem[] | null;
  trial_end?: number | null;
  trial_from_plan?: boolean | null;
};
export type SubscriptionScheduleCurrentPhase = {
  end_date: number;
  start_date: number;
};
export type InvoiceSettingSubscriptionScheduleSetting = {
  days_until_due?: number | null;
};
export type SubscriptionTransferData = {
  amount_percent?: number | null;
  destination: string | Account;
};
export type SubscriptionSchedulesResourceDefaultSettings = {
  billing_cycle_anchor: "automatic" | "phase_start";
  billing_thresholds?: SubscriptionBillingThresholds | null;
  collection_method?: ("charge_automatically" | "send_invoice") | null;
  default_payment_method?: (string | PaymentMethod) | null;
  invoice_settings?: InvoiceSettingSubscriptionScheduleSetting | null;
  transfer_data?: SubscriptionTransferData | null;
};
export type DeletedPrice = {
  deleted: true;
  id: string;
  object: "price";
};
export type SubscriptionScheduleAddInvoiceItem = {
  price: string | Price | DeletedPrice;
  quantity?: number | null;
  tax_rates?: TaxRate[] | null;
};
export type DeletedCoupon = {
  deleted: true;
  id: string;
  object: "coupon";
};
export type SubscriptionScheduleConfigurationItem = {
  billing_thresholds?: SubscriptionItemBillingThresholds | null;
  price: string | Price | DeletedPrice;
  quantity?: number;
  tax_rates?: TaxRate[] | null;
};
export type SubscriptionSchedulePhaseConfiguration = {
  add_invoice_items: SubscriptionScheduleAddInvoiceItem[];
  application_fee_percent?: number | null;
  billing_cycle_anchor?: ("automatic" | "phase_start") | null;
  billing_thresholds?: SubscriptionBillingThresholds | null;
  collection_method?: ("charge_automatically" | "send_invoice") | null;
  coupon?: (string | Coupon | DeletedCoupon) | null;
  default_payment_method?: (string | PaymentMethod) | null;
  default_tax_rates?: TaxRate[] | null;
  end_date: number;
  invoice_settings?: InvoiceSettingSubscriptionScheduleSetting | null;
  items: SubscriptionScheduleConfigurationItem[];
  proration_behavior: "always_invoice" | "create_prorations" | "none";
  start_date: number;
  transfer_data?: SubscriptionTransferData | null;
  trial_end?: number | null;
};
export type SubscriptionSchedule = {
  canceled_at?: number | null;
  completed_at?: number | null;
  created: number;
  current_phase?: SubscriptionScheduleCurrentPhase | null;
  customer: string | Customer | DeletedCustomer;
  default_settings: SubscriptionSchedulesResourceDefaultSettings;
  end_behavior: "cancel" | "none" | "release" | "renew";
  id: string;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "subscription_schedule";
  phases: SubscriptionSchedulePhaseConfiguration[];
  released_at?: number | null;
  released_subscription?: string | null;
  status: "active" | "canceled" | "completed" | "not_started" | "released";
  subscription?: (string | Subscription) | null;
};
export type Subscription = {
  application_fee_percent?: number | null;
  billing_cycle_anchor: number;
  billing_thresholds?: SubscriptionBillingThresholds | null;
  cancel_at?: number | null;
  cancel_at_period_end: boolean;
  canceled_at?: number | null;
  collection_method?: ("charge_automatically" | "send_invoice") | null;
  created: number;
  current_period_end: number;
  current_period_start: number;
  customer: string | Customer | DeletedCustomer;
  days_until_due?: number | null;
  default_payment_method?: (string | PaymentMethod) | null;
  default_source?:
    | (string | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source)
    | null;
  default_tax_rates?: TaxRate[] | null;
  discount?: Discount | null;
  ended_at?: number | null;
  id: string;
  items: {
    data: SubscriptionItem[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  latest_invoice?: (string | Invoice) | null;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  next_pending_invoice_item_invoice?: number | null;
  object: "subscription";
  pause_collection?: SubscriptionsResourcePauseCollection | null;
  pending_invoice_item_interval?: SubscriptionPendingInvoiceItemInterval | null;
  pending_setup_intent?: (string | SetupIntent) | null;
  pending_update?: SubscriptionsResourcePendingUpdate | null;
  schedule?: (string | SubscriptionSchedule) | null;
  start_date: number;
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "trialing"
    | "unpaid";
  transfer_data?: SubscriptionTransferData | null;
  trial_end?: number | null;
  trial_start?: number | null;
};
export type InvoiceItemThresholdReason = {
  line_item_ids: string[];
  usage_gte: number;
};
export type InvoiceThresholdReason = {
  amount_gte?: number | null;
  item_reasons: InvoiceItemThresholdReason[];
};
export type InvoiceTransferData = {
  amount?: number | null;
  destination: string | Account;
};
export type Invoice = {
  account_country?: string | null;
  account_name?: string | null;
  account_tax_ids?: (string | Tax_id | Deleted_tax_id)[] | null;
  amount_due: number;
  amount_paid: number;
  amount_remaining: number;
  application_fee_amount?: number | null;
  attempt_count: number;
  attempted: boolean;
  auto_advance?: boolean;
  billing_reason?:
    | (
        | "automatic_pending_invoice_item_invoice"
        | "manual"
        | "subscription"
        | "subscription_create"
        | "subscription_cycle"
        | "subscription_threshold"
        | "subscription_update"
        | "upcoming"
      )
    | null;
  charge?: (string | Charge) | null;
  collection_method?: ("charge_automatically" | "send_invoice") | null;
  created: number;
  currency: string;
  custom_fields?: InvoiceSettingCustomField[] | null;
  customer: string | Customer | DeletedCustomer;
  customer_address?: Address | null;
  customer_email?: string | null;
  customer_name?: string | null;
  customer_phone?: string | null;
  customer_shipping?: Shipping | null;
  customer_tax_exempt?: ("exempt" | "none" | "reverse") | null;
  customer_tax_ids?: InvoicesResourceInvoiceTaxID[] | null;
  default_payment_method?: (string | PaymentMethod) | null;
  default_source?:
    | (string | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source)
    | null;
  default_tax_rates: TaxRate[];
  description?: string | null;
  discount?: Discount | null;
  discounts?: (string | Discount | DeletedDiscount)[] | null;
  due_date?: number | null;
  ending_balance?: number | null;
  footer?: string | null;
  hosted_invoice_url?: string | null;
  id?: string;
  invoice_pdf?: string | null;
  last_finalization_error?: APIErrors | null;
  lines: {
    data: InvoiceLineItem[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  next_payment_attempt?: number | null;
  number?: string | null;
  object: "invoice";
  paid: boolean;
  payment_intent?: (string | PaymentIntent) | null;
  period_end: number;
  period_start: number;
  post_payment_credit_notes_amount: number;
  pre_payment_credit_notes_amount: number;
  receipt_number?: string | null;
  starting_balance: number;
  statement_descriptor?: string | null;
  status?:
    | ("deleted" | "draft" | "open" | "paid" | "uncollectible" | "void")
    | null;
  status_transitions: InvoicesStatusTransitions;
  subscription?: (string | Subscription) | null;
  subscription_proration_date?: number;
  subtotal: number;
  tax?: number | null;
  threshold_reason?: InvoiceThresholdReason;
  total: number;
  total_discount_amounts?: DiscountsResourceDiscountAmount[] | null;
  total_tax_amounts: InvoiceTaxAmount[];
  transfer_data?: InvoiceTransferData | null;
  webhooks_delivered_at?: number | null;
};
export type PaymentIntentNextActionAlipayHandleRedirect = {
  native_data?: string | null;
  native_url?: string | null;
  return_url?: string | null;
  url?: string | null;
};
export type PaymentIntentNextActionDisplayOxxoDetails = {
  expires_after?: number | null;
  hosted_voucher_url?: string | null;
  number?: string | null;
};
export type PaymentIntentNextActionRedirectToUrl = {
  return_url?: string | null;
  url?: string | null;
};
export type PaymentIntentNextAction = {
  alipay_handle_redirect?: PaymentIntentNextActionAlipayHandleRedirect;
  oxxo_display_details?: PaymentIntentNextActionDisplayOxxoDetails;
  redirect_to_url?: PaymentIntentNextActionRedirectToUrl;
  type: string;
  use_stripe_sdk?: object;
};
export type Payment_method_options_alipay = {};
export type Payment_method_options_bancontact = {
  preferred_language: "de" | "en" | "fr" | "nl";
};
export type Payment_method_details_card_installments_plan = {
  count?: number | null;
  interval?: "month" | null;
  type: "fixed_count";
};
export type Payment_method_options_card_installments = {
  available_plans?: Payment_method_details_card_installments_plan[] | null;
  enabled: boolean;
  plan?: Payment_method_details_card_installments_plan | null;
};
export type Payment_intent_payment_method_options_card = {
  installments?: Payment_method_options_card_installments | null;
  network?:
    | (
        | "amex"
        | "cartes_bancaires"
        | "diners"
        | "discover"
        | "interac"
        | "jcb"
        | "mastercard"
        | "unionpay"
        | "unknown"
        | "visa"
      )
    | null;
  request_three_d_secure?: ("any" | "automatic" | "challenge_only") | null;
};
export type Payment_method_options_oxxo = {
  expires_after_days: number;
};
export type Payment_method_options_p24 = {};
export type Payment_intent_payment_method_options_mandate_options_sepa_debit = {};
export type Payment_intent_payment_method_options_sepa_debit = {
  mandate_options?: Payment_intent_payment_method_options_mandate_options_sepa_debit;
};
export type Payment_method_options_sofort = {
  preferred_language?: ("de" | "en" | "es" | "fr" | "it" | "nl" | "pl") | null;
};
export type PaymentIntentPaymentMethodOptions = {
  alipay?: Payment_method_options_alipay;
  bancontact?: Payment_method_options_bancontact;
  card?: Payment_intent_payment_method_options_card;
  oxxo?: Payment_method_options_oxxo;
  p24?: Payment_method_options_p24;
  sepa_debit?: Payment_intent_payment_method_options_sepa_debit;
  sofort?: Payment_method_options_sofort;
};
export type RadarReviewResourceLocation = {
  city?: string | null;
  country?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  region?: string | null;
};
export type RadarReviewResourceSession = {
  browser?: string | null;
  device?: string | null;
  platform?: string | null;
  version?: string | null;
};
export type RadarReview = {
  billing_zip?: string | null;
  charge?: (string | Charge) | null;
  closed_reason?:
    | ("approved" | "disputed" | "refunded" | "refunded_as_fraud")
    | null;
  created: number;
  id: string;
  ip_address?: string | null;
  ip_address_location?: RadarReviewResourceLocation | null;
  livemode: boolean;
  object: "review";
  open: boolean;
  opened_reason: "manual" | "rule";
  payment_intent?: string | PaymentIntent;
  reason: string;
  session?: RadarReviewResourceSession | null;
};
export type Transfer_data = {
  amount?: number;
  destination: string | Account;
};
export type PaymentIntent = {
  amount: number;
  amount_capturable?: number;
  amount_received?: number;
  application?: (string | Application) | null;
  application_fee_amount?: number | null;
  canceled_at?: number | null;
  cancellation_reason?:
    | (
        | "abandoned"
        | "automatic"
        | "duplicate"
        | "failed_invoice"
        | "fraudulent"
        | "requested_by_customer"
        | "void_invoice"
      )
    | null;
  capture_method: "automatic" | "manual";
  charges?: {
    data: Charge[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  client_secret?: string | null;
  confirmation_method: "automatic" | "manual";
  created: number;
  currency: string;
  customer?: (string | Customer | DeletedCustomer) | null;
  description?: string | null;
  id: string;
  invoice?: (string | Invoice) | null;
  last_payment_error?: APIErrors | null;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  };
  next_action?: PaymentIntentNextAction | null;
  object: "payment_intent";
  on_behalf_of?: (string | Account) | null;
  payment_method?: (string | PaymentMethod) | null;
  payment_method_options?: PaymentIntentPaymentMethodOptions | null;
  payment_method_types: string[];
  receipt_email?: string | null;
  review?: (string | RadarReview) | null;
  setup_future_usage?: ("off_session" | "on_session") | null;
  shipping?: Shipping | null;
  statement_descriptor?: string | null;
  statement_descriptor_suffix?: string | null;
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_capture"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  transfer_data?: Transfer_data | null;
  transfer_group?: string | null;
};
export type Dispute = {
  amount: number;
  balance_transactions: BalanceTransaction[];
  charge: string | Charge;
  created: number;
  currency: string;
  evidence: DisputeEvidence;
  evidence_details: DisputeEvidenceDetails;
  id: string;
  is_charge_refundable: boolean;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "dispute";
  payment_intent?: (string | PaymentIntent) | null;
  reason: string;
  status:
    | "charge_refunded"
    | "lost"
    | "needs_response"
    | "under_review"
    | "warning_closed"
    | "warning_needs_response"
    | "warning_under_review"
    | "won";
};
export type FeeRefund = {
  amount: number;
  balance_transaction?: (string | BalanceTransaction) | null;
  created: number;
  currency: string;
  fee: string | PlatformFee;
  id: string;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "fee_refund";
};
export type IssuingAuthorizationAmountDetails = {
  atm_fee?: number | null;
};
export type IssuingCardholderAddress = {
  address: Address;
};
export type IssuingCardholderCompany = {
  tax_id_provided: boolean;
};
export type IssuingCardholderIndividualDOB = {
  day?: number | null;
  month?: number | null;
  year?: number | null;
};
export type IssuingCardholderIdDocument = {
  back?: (string | File) | null;
  front?: (string | File) | null;
};
export type IssuingCardholderVerification = {
  document?: IssuingCardholderIdDocument | null;
};
export type IssuingCardholderIndividual = {
  dob?: IssuingCardholderIndividualDOB | null;
  first_name: string;
  last_name: string;
  verification?: IssuingCardholderVerification | null;
};
export type IssuingCardholderRequirements = {
  disabled_reason?: ("listed" | "rejected.listed" | "under_review") | null;
  past_due?:
    | (
        | "company.tax_id"
        | "individual.dob.day"
        | "individual.dob.month"
        | "individual.dob.year"
        | "individual.first_name"
        | "individual.last_name"
        | "individual.verification.document"
      )[]
    | null;
};
export type IssuingCardholderSpendingLimit = {
  amount: number;
  categories?:
    | (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[]
    | null;
  interval:
    | "all_time"
    | "daily"
    | "monthly"
    | "per_authorization"
    | "weekly"
    | "yearly";
};
export type IssuingCardholderAuthorizationControls = {
  allowed_categories?:
    | (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[]
    | null;
  blocked_categories?:
    | (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[]
    | null;
  spending_limits?: IssuingCardholderSpendingLimit[] | null;
  spending_limits_currency?: string | null;
};
export type IssuingCardholder = {
  billing: IssuingCardholderAddress;
  company?: IssuingCardholderCompany | null;
  created: number;
  email?: string | null;
  id: string;
  individual?: IssuingCardholderIndividual | null;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  name: string;
  object: "issuing.cardholder";
  phone_number?: string | null;
  requirements: IssuingCardholderRequirements;
  spending_controls?: IssuingCardholderAuthorizationControls | null;
  status: "active" | "blocked" | "inactive";
  type: "company" | "individual";
};
export type IssuingCardShipping = {
  address: Address;
  carrier?: ("fedex" | "usps") | null;
  eta?: number | null;
  name: string;
  service: "express" | "priority" | "standard";
  status?:
    | (
        | "canceled"
        | "delivered"
        | "failure"
        | "pending"
        | "returned"
        | "shipped"
      )
    | null;
  tracking_number?: string | null;
  tracking_url?: string | null;
  type: "bulk" | "individual";
};
export type IssuingCardSpendingLimit = {
  amount: number;
  categories?:
    | (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[]
    | null;
  interval:
    | "all_time"
    | "daily"
    | "monthly"
    | "per_authorization"
    | "weekly"
    | "yearly";
};
export type IssuingCardAuthorizationControls = {
  allowed_categories?:
    | (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[]
    | null;
  blocked_categories?:
    | (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[]
    | null;
  spending_limits?: IssuingCardSpendingLimit[] | null;
  spending_limits_currency?: string | null;
};
export type IssuingCard = {
  brand: string;
  cancellation_reason?: ("lost" | "stolen") | null;
  cardholder: IssuingCardholder;
  created: number;
  currency: string;
  cvc?: string;
  exp_month: number;
  exp_year: number;
  id: string;
  last4: string;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  number?: string;
  object: "issuing.card";
  replaced_by?: (string | IssuingCard) | null;
  replacement_for?: (string | IssuingCard) | null;
  replacement_reason?: ("damaged" | "expired" | "lost" | "stolen") | null;
  shipping?: IssuingCardShipping | null;
  spending_controls: IssuingCardAuthorizationControls;
  status: "active" | "canceled" | "inactive";
  type: "physical" | "virtual";
};
export type IssuingAuthorizationMerchantData = {
  category: string;
  city?: string | null;
  country?: string | null;
  name?: string | null;
  network_id: string;
  postal_code?: string | null;
  state?: string | null;
};
export type IssuingAuthorizationPendingRequest = {
  amount: number;
  amount_details?: IssuingAuthorizationAmountDetails | null;
  currency: string;
  is_amount_controllable: boolean;
  merchant_amount: number;
  merchant_currency: string;
};
export type IssuingAuthorizationRequest = {
  amount: number;
  amount_details?: IssuingAuthorizationAmountDetails | null;
  approved: boolean;
  created: number;
  currency: string;
  merchant_amount: number;
  merchant_currency: string;
  reason:
    | "account_disabled"
    | "card_active"
    | "card_inactive"
    | "cardholder_inactive"
    | "cardholder_verification_required"
    | "insufficient_funds"
    | "not_allowed"
    | "spending_controls"
    | "suspected_fraud"
    | "verification_failed"
    | "webhook_approved"
    | "webhook_declined"
    | "webhook_timeout";
};
export type IssuingTransactionAmountDetails = {
  atm_fee?: number | null;
};
export type IssuingDisputeCanceledEvidence = {
  additional_documentation?: (string | File) | null;
  canceled_at?: number | null;
  cancellation_policy_provided?: boolean | null;
  cancellation_reason?: string | null;
  expected_at?: number | null;
  explanation?: string | null;
  product_description?: string | null;
  product_type?: ("merchandise" | "service") | null;
  return_status?: ("merchant_rejected" | "successful") | null;
  returned_at?: number | null;
};
export type IssuingDisputeDuplicateEvidence = {
  additional_documentation?: (string | File) | null;
  card_statement?: (string | File) | null;
  cash_receipt?: (string | File) | null;
  check_image?: (string | File) | null;
  explanation?: string | null;
  original_transaction?: string | null;
};
export type IssuingDisputeFraudulentEvidence = {
  additional_documentation?: (string | File) | null;
  explanation?: string | null;
};
export type IssuingDisputeMerchandiseNotAsDescribedEvidence = {
  additional_documentation?: (string | File) | null;
  explanation?: string | null;
  received_at?: number | null;
  return_description?: string | null;
  return_status?: ("merchant_rejected" | "successful") | null;
  returned_at?: number | null;
};
export type IssuingDisputeNotReceivedEvidence = {
  additional_documentation?: (string | File) | null;
  expected_at?: number | null;
  explanation?: string | null;
  product_description?: string | null;
  product_type?: ("merchandise" | "service") | null;
};
export type IssuingDisputeOtherEvidence = {
  additional_documentation?: (string | File) | null;
  explanation?: string | null;
  product_description?: string | null;
  product_type?: ("merchandise" | "service") | null;
};
export type IssuingDisputeServiceNotAsDescribedEvidence = {
  additional_documentation?: (string | File) | null;
  canceled_at?: number | null;
  cancellation_reason?: string | null;
  explanation?: string | null;
  received_at?: number | null;
};
export type IssuingDisputeEvidence = {
  canceled?: IssuingDisputeCanceledEvidence;
  duplicate?: IssuingDisputeDuplicateEvidence;
  fraudulent?: IssuingDisputeFraudulentEvidence;
  merchandise_not_as_described?: IssuingDisputeMerchandiseNotAsDescribedEvidence;
  not_received?: IssuingDisputeNotReceivedEvidence;
  other?: IssuingDisputeOtherEvidence;
  reason:
    | "canceled"
    | "duplicate"
    | "fraudulent"
    | "merchandise_not_as_described"
    | "not_received"
    | "other"
    | "service_not_as_described";
  service_not_as_described?: IssuingDisputeServiceNotAsDescribedEvidence;
};
export type IssuingDispute = {
  amount?: number;
  balance_transactions?: BalanceTransaction[] | null;
  created?: number;
  currency?: string;
  evidence?: IssuingDisputeEvidence;
  id: string;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  };
  object: "issuing.dispute";
  status?: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
  transaction: string | IssuingTransaction;
};
export type IssuingTransactionFlightDataLeg = {
  arrival_airport_code?: string | null;
  carrier?: string | null;
  departure_airport_code?: string | null;
  flight_number?: string | null;
  service_class?: string | null;
  stopover_allowed?: boolean | null;
};
export type IssuingTransactionFlightData = {
  departure_at?: number | null;
  passenger_name?: string | null;
  refundable?: boolean | null;
  segments?: IssuingTransactionFlightDataLeg[] | null;
  travel_agency?: string | null;
};
export type IssuingTransactionFuelData = {
  type: string;
  unit: string;
  unit_cost_decimal: string;
  volume_decimal?: string | null;
};
export type IssuingTransactionLodgingData = {
  check_in_at?: number | null;
  nights?: number | null;
};
export type IssuingTransactionReceiptData = {
  description?: string | null;
  quantity?: number | null;
  total?: number | null;
  unit_cost?: number | null;
};
export type IssuingTransactionPurchaseDetails = {
  flight?: IssuingTransactionFlightData | null;
  fuel?: IssuingTransactionFuelData | null;
  lodging?: IssuingTransactionLodgingData | null;
  receipt?: IssuingTransactionReceiptData[] | null;
  reference?: string | null;
};
export type IssuingTransaction = {
  amount: number;
  amount_details?: IssuingTransactionAmountDetails | null;
  authorization?: (string | IssuingAuthorization) | null;
  balance_transaction?: (string | BalanceTransaction) | null;
  card: string | IssuingCard;
  cardholder?: (string | IssuingCardholder) | null;
  created: number;
  currency: string;
  dispute?: (string | IssuingDispute) | null;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  merchant_data: IssuingAuthorizationMerchantData;
  metadata: {
    [key: string]: string;
  };
  object: "issuing.transaction";
  purchase_details?: IssuingTransactionPurchaseDetails | null;
  type: "capture" | "dispute" | "refund";
};
export type IssuingAuthorizationVerificationData = {
  address_line1_check: "match" | "mismatch" | "not_provided";
  address_postal_code_check: "match" | "mismatch" | "not_provided";
  cvc_check: "match" | "mismatch" | "not_provided";
  expiry_check: "match" | "mismatch" | "not_provided";
};
export type IssuingAuthorization = {
  amount: number;
  amount_details?: IssuingAuthorizationAmountDetails | null;
  approved: boolean;
  authorization_method:
    | "chip"
    | "contactless"
    | "keyed_in"
    | "online"
    | "swipe";
  balance_transactions: BalanceTransaction[];
  card: IssuingCard;
  cardholder?: (string | IssuingCardholder) | null;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  merchant_data: IssuingAuthorizationMerchantData;
  metadata: {
    [key: string]: string;
  };
  object: "issuing.authorization";
  pending_request?: IssuingAuthorizationPendingRequest | null;
  request_history: IssuingAuthorizationRequest[];
  status: "closed" | "pending" | "reversed";
  transactions: IssuingTransaction[];
  verification_data: IssuingAuthorizationVerificationData;
  wallet?: string | null;
};
export type DeletedBankAccount = {
  currency?: string | null;
  deleted: true;
  id: string;
  object: "bank_account";
};
export type DeletedCard = {
  currency?: string | null;
  deleted: true;
  id: string;
  object: "card";
};
export type Payout = {
  amount: number;
  arrival_date: number;
  automatic: boolean;
  balance_transaction?: (string | BalanceTransaction) | null;
  created: number;
  currency: string;
  description?: string | null;
  destination?:
    | (string | BankAccount | Card | DeletedBankAccount | DeletedCard)
    | null;
  failure_balance_transaction?: (string | BalanceTransaction) | null;
  failure_code?: string | null;
  failure_message?: string | null;
  id: string;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  method: string;
  object: "payout";
  original_payout?: (string | Payout) | null;
  reversed_by?: (string | Payout) | null;
  source_type: string;
  statement_descriptor?: string | null;
  status: string;
  type: "bank_account" | "card";
};
export type PlatformTax = {
  account: string;
  id: string;
  object: "platform_tax_fee";
  source_transaction: string;
  type: string;
};
export type Transfer = {
  amount: number;
  amount_reversed: number;
  balance_transaction?: (string | BalanceTransaction) | null;
  created: number;
  currency: string;
  description?: string | null;
  destination?: (string | Account) | null;
  destination_payment?: string | Charge;
  id: string;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "transfer";
  reversals: {
    data: TransferReversal[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  reversed: boolean;
  source_transaction?: (string | Charge) | null;
  source_type?: string | null;
  transfer_group?: string | null;
};
export type TransferReversal = {
  amount: number;
  balance_transaction?: (string | BalanceTransaction) | null;
  created: number;
  currency: string;
  destination_payment_refund?: (string | Refund) | null;
  id: string;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "transfer_reversal";
  source_refund?: (string | Refund) | null;
  transfer: string | Transfer;
};
export type Refund = {
  amount: number;
  balance_transaction?: (string | BalanceTransaction) | null;
  charge?: (string | Charge) | null;
  created: number;
  currency: string;
  description?: string;
  failure_balance_transaction?: string | BalanceTransaction;
  failure_reason?: string;
  id: string;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "refund";
  payment_intent?: (string | PaymentIntent) | null;
  reason?: string | null;
  receipt_number?: string | null;
  source_transfer_reversal?: (string | TransferReversal) | null;
  status?: string | null;
  transfer_reversal?: (string | TransferReversal) | null;
};
export type ReserveTransaction = {
  amount: number;
  currency: string;
  description?: string | null;
  id: string;
  object: "reserve_transaction";
};
export type TaxDeductedAtSource = {
  id: string;
  object: "tax_deducted_at_source";
  period_end: number;
  period_start: number;
  tax_deduction_account_number: string;
};
export type Topup = {
  amount: number;
  balance_transaction?: (string | BalanceTransaction) | null;
  created: number;
  currency: string;
  description?: string | null;
  expected_availability_date?: number | null;
  failure_code?: string | null;
  failure_message?: string | null;
  id: string;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "topup";
  source: Source;
  statement_descriptor?: string | null;
  status: "canceled" | "failed" | "pending" | "reversed" | "succeeded";
  transfer_group?: string | null;
};
export type BalanceTransaction = {
  amount: number;
  available_on: number;
  created: number;
  currency: string;
  description?: string | null;
  exchange_rate?: number | null;
  fee: number;
  fee_details: Fee[];
  id: string;
  net: number;
  object: "balance_transaction";
  reporting_category: string;
  source?:
    | (
        | string
        | PlatformFee
        | Charge
        | ConnectCollectionTransfer
        | Dispute
        | FeeRefund
        | IssuingAuthorization
        | IssuingDispute
        | IssuingTransaction
        | Payout
        | PlatformTax
        | Refund
        | ReserveTransaction
        | TaxDeductedAtSource
        | Topup
        | Transfer
        | TransferReversal
      )
    | null;
  status: string;
  type:
    | "adjustment"
    | "advance"
    | "advance_funding"
    | "anticipation_repayment"
    | "application_fee"
    | "application_fee_refund"
    | "charge"
    | "connect_collection_transfer"
    | "contribution"
    | "issuing_authorization_hold"
    | "issuing_authorization_release"
    | "issuing_dispute"
    | "issuing_transaction"
    | "payment"
    | "payment_failure_refund"
    | "payment_refund"
    | "payout"
    | "payout_cancel"
    | "payout_failure"
    | "refund"
    | "refund_failure"
    | "reserve_transaction"
    | "reserved_funds"
    | "stripe_fee"
    | "stripe_fx_fee"
    | "tax_fee"
    | "topup"
    | "topup_reversal"
    | "transfer"
    | "transfer_cancel"
    | "transfer_failure"
    | "transfer_refund";
};
export type PlatformFee = {
  account: string | Account;
  amount: number;
  amount_refunded: number;
  application: string | Application;
  balance_transaction?: (string | BalanceTransaction) | null;
  charge: string | Charge;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  object: "application_fee";
  originating_transaction?: (string | Charge) | null;
  refunded: boolean;
  refunds: {
    data: FeeRefund[];
    has_more: boolean;
    object: "list";
    url: string;
  };
};
export type ChargeFraudDetails = {
  stripe_report?: string;
  user_report?: string;
};
export type Inventory = {
  quantity?: number | null;
  type: string;
  value?: string | null;
};
export type Sku = {
  active: boolean;
  attributes: {
    [key: string]: string;
  };
  created: number;
  currency: string;
  id: string;
  image?: string | null;
  inventory: Inventory;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "sku";
  package_dimensions?: PackageDimensions | null;
  price: number;
  product: string | Product;
  updated: number;
};
export type OrderItem = {
  amount: number;
  currency: string;
  description: string;
  object: "order_item";
  parent?: (string | Sku) | null;
  quantity?: number | null;
  type: string;
};
export type OrderReturn = {
  amount: number;
  created: number;
  currency: string;
  id: string;
  items: OrderItem[];
  livemode: boolean;
  object: "order_return";
  order?: (string | Order) | null;
  refund?: (string | Refund) | null;
};
export type DeliveryEstimate = {
  date?: string;
  earliest?: string;
  latest?: string;
  type: string;
};
export type ShippingMethod = {
  amount: number;
  currency: string;
  delivery_estimate?: DeliveryEstimate | null;
  description: string;
  id: string;
};
export type StatusTransitions = {
  canceled?: number | null;
  fulfiled?: number | null;
  paid?: number | null;
  returned?: number | null;
};
export type Order = {
  amount: number;
  amount_returned?: number | null;
  application?: string | null;
  application_fee?: number | null;
  charge?: (string | Charge) | null;
  created: number;
  currency: string;
  customer?: (string | Customer | DeletedCustomer) | null;
  email?: string | null;
  external_coupon_code?: string;
  id: string;
  items: OrderItem[];
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "order";
  returns?: {
    data: OrderReturn[];
    has_more: boolean;
    object: "list";
    url: string;
  } | null;
  selected_shipping_method?: string | null;
  shipping?: Shipping | null;
  shipping_methods?: ShippingMethod[] | null;
  status: string;
  status_transitions?: StatusTransitions | null;
  updated?: number | null;
  upstream_id?: string;
};
export type RadarRule = {
  action: string;
  id: string;
  predicate: string;
};
export type ChargeOutcome = {
  network_status?: string | null;
  reason?: string | null;
  risk_level?: string;
  risk_score?: number;
  rule?: string | RadarRule;
  seller_message?: string | null;
  type: string;
};
export type Payment_method_details_ach_credit_transfer = {
  account_number?: string | null;
  bank_name?: string | null;
  routing_number?: string | null;
  swift_code?: string | null;
};
export type Payment_method_details_ach_debit = {
  account_holder_type?: ("company" | "individual") | null;
  bank_name?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  routing_number?: string | null;
};
export type PaymentFlowsPrivatePaymentMethodsAlipayDetails = {
  fingerprint?: string | null;
  transaction_id?: string | null;
};
export type Payment_method_details_au_becs_debit = {
  bsb_number?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  mandate?: string;
};
export type Payment_method_details_bacs_debit = {
  fingerprint?: string | null;
  last4?: string | null;
  mandate?: string | null;
  sort_code?: string | null;
};
export type Payment_method_details_bancontact = {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  generated_sepa_debit?: (string | PaymentMethod) | null;
  generated_sepa_debit_mandate?: (string | Mandate) | null;
  iban_last4?: string | null;
  preferred_language?: ("de" | "en" | "fr" | "nl") | null;
  verified_name?: string | null;
};
export type Payment_method_details_card_checks = {
  address_line1_check?: string | null;
  address_postal_code_check?: string | null;
  cvc_check?: string | null;
};
export type Payment_method_details_card_installments = {
  plan?: Payment_method_details_card_installments_plan | null;
};
export type Payment_method_details_card_wallet_amex_express_checkout = {};
export type Payment_method_details_card_wallet_apple_pay = {};
export type Payment_method_details_card_wallet_google_pay = {};
export type Payment_method_details_card_wallet_masterpass = {
  billing_address?: Address | null;
  email?: string | null;
  name?: string | null;
  shipping_address?: Address | null;
};
export type Payment_method_details_card_wallet_samsung_pay = {};
export type Payment_method_details_card_wallet_visa_checkout = {
  billing_address?: Address | null;
  email?: string | null;
  name?: string | null;
  shipping_address?: Address | null;
};
export type Payment_method_details_card_wallet = {
  amex_express_checkout?: Payment_method_details_card_wallet_amex_express_checkout;
  apple_pay?: Payment_method_details_card_wallet_apple_pay;
  dynamic_last4?: string | null;
  google_pay?: Payment_method_details_card_wallet_google_pay;
  masterpass?: Payment_method_details_card_wallet_masterpass;
  samsung_pay?: Payment_method_details_card_wallet_samsung_pay;
  type:
    | "amex_express_checkout"
    | "apple_pay"
    | "google_pay"
    | "masterpass"
    | "samsung_pay"
    | "visa_checkout";
  visa_checkout?: Payment_method_details_card_wallet_visa_checkout;
};
export type Payment_method_details_card = {
  brand?: string | null;
  checks?: Payment_method_details_card_checks | null;
  country?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding?: string | null;
  installments?: Payment_method_details_card_installments | null;
  last4?: string | null;
  network?: string | null;
  three_d_secure?: Three_d_secure_details | null;
  wallet?: Payment_method_details_card_wallet | null;
};
export type Payment_method_details_eps = {
  verified_name?: string | null;
};
export type Payment_method_details_fpx = {
  bank:
    | "affin_bank"
    | "alliance_bank"
    | "ambank"
    | "bank_islam"
    | "bank_muamalat"
    | "bank_rakyat"
    | "bsn"
    | "cimb"
    | "deutsche_bank"
    | "hong_leong_bank"
    | "hsbc"
    | "kfh"
    | "maybank2e"
    | "maybank2u"
    | "ocbc"
    | "pb_enterprise"
    | "public_bank"
    | "rhb"
    | "standard_chartered"
    | "uob";
  transaction_id?: string | null;
};
export type Payment_method_details_giropay = {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  verified_name?: string | null;
};
export type Payment_method_details_grabpay = {
  transaction_id?: string | null;
};
export type Payment_method_details_ideal = {
  bank?:
    | (
        | "abn_amro"
        | "asn_bank"
        | "bunq"
        | "handelsbanken"
        | "ing"
        | "knab"
        | "moneyou"
        | "rabobank"
        | "regiobank"
        | "sns_bank"
        | "triodos_bank"
        | "van_lanschot"
      )
    | null;
  bic?:
    | (
        | "ABNANL2A"
        | "ASNBNL21"
        | "BUNQNL2A"
        | "FVLBNL22"
        | "HANDNL2A"
        | "INGBNL2A"
        | "KNABNL2H"
        | "MOYONL21"
        | "RABONL2U"
        | "RBRBNL21"
        | "SNSBNL2A"
        | "TRIONL2U"
      )
    | null;
  generated_sepa_debit?: (string | PaymentMethod) | null;
  generated_sepa_debit_mandate?: (string | Mandate) | null;
  iban_last4?: string | null;
  verified_name?: string | null;
};
export type Payment_method_details_interac_present_receipt = {
  account_type?: "checking" | "savings" | "unknown";
  application_cryptogram?: string | null;
  application_preferred_name?: string | null;
  authorization_code?: string | null;
  authorization_response_code?: string | null;
  cardholder_verification_method?: string | null;
  dedicated_file_name?: string | null;
  terminal_verification_results?: string | null;
  transaction_status_information?: string | null;
};
export type Payment_method_details_interac_present = {
  brand?: string | null;
  cardholder_name?: string | null;
  country?: string | null;
  emv_auth_data?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding?: string | null;
  generated_card?: string | null;
  last4?: string | null;
  network?: string | null;
  preferred_locales?: string[] | null;
  read_method?:
    | (
        | "contact_emv"
        | "contactless_emv"
        | "contactless_magstripe_mode"
        | "magnetic_stripe_fallback"
        | "magnetic_stripe_track2"
      )
    | null;
  receipt?: Payment_method_details_interac_present_receipt | null;
};
export type Payment_method_details_klarna = {};
export type Payment_method_details_multibanco = {
  entity?: string | null;
  reference?: string | null;
};
export type Payment_method_details_oxxo = {
  number?: string | null;
};
export type Payment_method_details_p24 = {
  reference?: string | null;
  verified_name?: string | null;
};
export type Payment_method_details_sepa_debit = {
  bank_code?: string | null;
  branch_code?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  mandate?: string | null;
};
export type Payment_method_details_sofort = {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  country?: string | null;
  generated_sepa_debit?: (string | PaymentMethod) | null;
  generated_sepa_debit_mandate?: (string | Mandate) | null;
  iban_last4?: string | null;
  preferred_language?: ("de" | "en" | "es" | "fr" | "it" | "nl" | "pl") | null;
  verified_name?: string | null;
};
export type Payment_method_details_stripe_account = {};
export type Payment_method_details_wechat = {};
export type Payment_method_details = {
  ach_credit_transfer?: Payment_method_details_ach_credit_transfer;
  ach_debit?: Payment_method_details_ach_debit;
  alipay?: PaymentFlowsPrivatePaymentMethodsAlipayDetails;
  au_becs_debit?: Payment_method_details_au_becs_debit;
  bacs_debit?: Payment_method_details_bacs_debit;
  bancontact?: Payment_method_details_bancontact;
  card?: Payment_method_details_card;
  card_present?: Payment_method_details_card_present;
  eps?: Payment_method_details_eps;
  fpx?: Payment_method_details_fpx;
  giropay?: Payment_method_details_giropay;
  grabpay?: Payment_method_details_grabpay;
  ideal?: Payment_method_details_ideal;
  interac_present?: Payment_method_details_interac_present;
  klarna?: Payment_method_details_klarna;
  multibanco?: Payment_method_details_multibanco;
  oxxo?: Payment_method_details_oxxo;
  p24?: Payment_method_details_p24;
  sepa_debit?: Payment_method_details_sepa_debit;
  sofort?: Payment_method_details_sofort;
  stripe_account?: Payment_method_details_stripe_account;
  type: string;
  wechat?: Payment_method_details_wechat;
};
export type ChargeTransferData = {
  amount?: number | null;
  destination: string | Account;
};
export type Charge = {
  amount: number;
  amount_captured: number;
  amount_refunded: number;
  application?: (string | Application) | null;
  application_fee?: (string | PlatformFee) | null;
  application_fee_amount?: number | null;
  balance_transaction?: (string | BalanceTransaction) | null;
  billing_details: Billing_details;
  calculated_statement_descriptor?: string | null;
  captured: boolean;
  created: number;
  currency: string;
  customer?: (string | Customer | DeletedCustomer) | null;
  description?: string | null;
  disputed: boolean;
  failure_code?: string | null;
  failure_message?: string | null;
  fraud_details?: ChargeFraudDetails | null;
  id: string;
  invoice?: (string | Invoice) | null;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "charge";
  on_behalf_of?: (string | Account) | null;
  order?: (string | Order) | null;
  outcome?: ChargeOutcome | null;
  paid: boolean;
  payment_intent?: (string | PaymentIntent) | null;
  payment_method?: string | null;
  payment_method_details?: Payment_method_details | null;
  receipt_email?: string | null;
  receipt_number?: string | null;
  receipt_url?: string | null;
  refunded: boolean;
  refunds: {
    data: Refund[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  review?: (string | RadarReview) | null;
  shipping?: Shipping | null;
  source_transfer?: (string | Transfer) | null;
  statement_descriptor?: string | null;
  statement_descriptor_suffix?: string | null;
  status: string;
  transfer?: string | Transfer;
  transfer_data?: ChargeTransferData | null;
  transfer_group?: string | null;
};
export type Sepa_debit_generated_from = {
  charge?: (string | Charge) | null;
  setup_attempt?: (string | PaymentFlowsSetupIntentSetupAttempt) | null;
};
export type Payment_method_sepa_debit = {
  bank_code?: string | null;
  branch_code?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  generated_from?: Sepa_debit_generated_from | null;
  last4?: string | null;
};
export type Payment_method_sofort = {
  country?: string | null;
};
export type PaymentMethod = {
  alipay?: PaymentFlowsPrivatePaymentMethodsAlipay;
  au_becs_debit?: Payment_method_au_becs_debit;
  bacs_debit?: Payment_method_bacs_debit;
  bancontact?: Payment_method_bancontact;
  billing_details: Billing_details;
  card?: Payment_method_card;
  card_present?: Payment_method_card_present;
  created: number;
  customer?: (string | Customer) | null;
  eps?: Payment_method_eps;
  fpx?: Payment_method_fpx;
  giropay?: Payment_method_giropay;
  grabpay?: Payment_method_grabpay;
  id: string;
  ideal?: Payment_method_ideal;
  interac_present?: Payment_method_interac_present;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "payment_method";
  oxxo?: Payment_method_oxxo;
  p24?: Payment_method_p24;
  sepa_debit?: Payment_method_sepa_debit;
  sofort?: Payment_method_sofort;
  type:
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "interac_present"
    | "oxxo"
    | "p24"
    | "sepa_debit"
    | "sofort";
};
export type InvoiceSettingCustomerSetting = {
  custom_fields?: InvoiceSettingCustomField[] | null;
  default_payment_method?: (string | PaymentMethod) | null;
  footer?: string | null;
};
export type Customer = {
  address?: Address | null;
  balance?: number;
  created: number;
  currency?: string | null;
  default_source?:
    | (string | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source)
    | null;
  delinquent?: boolean | null;
  description?: string | null;
  discount?: Discount | null;
  email?: string | null;
  id: string;
  invoice_prefix?: string | null;
  invoice_settings?: InvoiceSettingCustomerSetting;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  };
  name?: string | null;
  next_invoice_sequence?: number;
  object: "customer";
  phone?: string | null;
  preferred_locales?: string[] | null;
  shipping?: Shipping | null;
  sources?: {
    data: (AlipayAccount | BankAccount | BitcoinReceiver | Card | Source)[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  subscriptions?: {
    data: Subscription[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  tax_exempt?: ("exempt" | "none" | "reverse") | null;
  tax_ids?: {
    data: Tax_id[];
    has_more: boolean;
    object: "list";
    url: string;
  };
};
export type BankAccount = {
  account?: (string | Account) | null;
  account_holder_name?: string | null;
  account_holder_type?: string | null;
  available_payout_methods?: ("instant" | "standard")[] | null;
  bank_name?: string | null;
  country: string;
  currency: string;
  customer?: (string | Customer | DeletedCustomer) | null;
  default_for_currency?: boolean | null;
  fingerprint?: string | null;
  id: string;
  last4: string;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "bank_account";
  routing_number?: string | null;
  status: string;
};
export type LegalEntityDOB = {
  day?: number | null;
  month?: number | null;
  year?: number | null;
};
export type PersonRelationship = {
  director?: boolean | null;
  executive?: boolean | null;
  owner?: boolean | null;
  percent_ownership?: number | null;
  representative?: boolean | null;
  title?: string | null;
};
export type AccountRequirementsError = {
  code:
    | "invalid_address_city_state_postal_code"
    | "invalid_street_address"
    | "invalid_value_other"
    | "verification_document_address_mismatch"
    | "verification_document_address_missing"
    | "verification_document_corrupt"
    | "verification_document_country_not_supported"
    | "verification_document_dob_mismatch"
    | "verification_document_duplicate_type"
    | "verification_document_expired"
    | "verification_document_failed_copy"
    | "verification_document_failed_greyscale"
    | "verification_document_failed_other"
    | "verification_document_failed_test_mode"
    | "verification_document_fraudulent"
    | "verification_document_id_number_mismatch"
    | "verification_document_id_number_missing"
    | "verification_document_incomplete"
    | "verification_document_invalid"
    | "verification_document_issue_or_expiry_date_missing"
    | "verification_document_manipulated"
    | "verification_document_missing_back"
    | "verification_document_missing_front"
    | "verification_document_name_mismatch"
    | "verification_document_name_missing"
    | "verification_document_nationality_mismatch"
    | "verification_document_not_readable"
    | "verification_document_not_signed"
    | "verification_document_not_uploaded"
    | "verification_document_photo_mismatch"
    | "verification_document_too_large"
    | "verification_document_type_not_supported"
    | "verification_failed_address_match"
    | "verification_failed_business_iec_number"
    | "verification_failed_document_match"
    | "verification_failed_id_number_match"
    | "verification_failed_keyed_identity"
    | "verification_failed_keyed_match"
    | "verification_failed_name_match"
    | "verification_failed_other"
    | "verification_failed_tax_id_match"
    | "verification_failed_tax_id_not_issued";
  reason: string;
  requirement: string;
};
export type PersonRequirements = {
  currently_due: string[];
  errors: AccountRequirementsError[];
  eventually_due: string[];
  past_due: string[];
  pending_verification: string[];
};
export type LegalEntityPersonVerificationDocument = {
  back?: (string | File) | null;
  details?: string | null;
  details_code?: string | null;
  front?: (string | File) | null;
};
export type LegalEntityPersonVerification = {
  additional_document?: LegalEntityPersonVerificationDocument | null;
  details?: string | null;
  details_code?: string | null;
  document?: LegalEntityPersonVerificationDocument;
  status: string;
};
export type Person = {
  account: string;
  address?: Address;
  address_kana?: LegalEntityJapanAddress | null;
  address_kanji?: LegalEntityJapanAddress | null;
  created: number;
  dob?: LegalEntityDOB;
  email?: string | null;
  first_name?: string | null;
  first_name_kana?: string | null;
  first_name_kanji?: string | null;
  gender?: string | null;
  id: string;
  id_number_provided?: boolean;
  last_name?: string | null;
  last_name_kana?: string | null;
  last_name_kanji?: string | null;
  maiden_name?: string | null;
  metadata?: {
    [key: string]: string;
  };
  object: "person";
  phone?: string | null;
  political_exposure?: "existing" | "none";
  relationship?: PersonRelationship;
  requirements?: PersonRequirements | null;
  ssn_last_4_provided?: boolean;
  verification?: LegalEntityPersonVerification;
};
export type AccountRequirements = {
  current_deadline?: number | null;
  currently_due?: string[] | null;
  disabled_reason?: string | null;
  errors?: AccountRequirementsError[] | null;
  eventually_due?: string[] | null;
  past_due?: string[] | null;
  pending_verification?: string[] | null;
};
export type AccountBacsDebitPaymentsSettings = {
  display_name?: string;
};
export type AccountBrandingSettings = {
  icon?: (string | File) | null;
  logo?: (string | File) | null;
  primary_color?: string | null;
  secondary_color?: string | null;
};
export type AccountDeclineChargeOn = {
  avs_failure: boolean;
  cvc_failure: boolean;
};
export type AccountCardPaymentsSettings = {
  decline_on?: AccountDeclineChargeOn;
  statement_descriptor_prefix?: string | null;
};
export type AccountDashboardSettings = {
  display_name?: string | null;
  timezone?: string | null;
};
export type AccountPaymentsSettings = {
  statement_descriptor?: string | null;
  statement_descriptor_kana?: string | null;
  statement_descriptor_kanji?: string | null;
};
export type TransferSchedule = {
  delay_days: number;
  interval: string;
  monthly_anchor?: number;
  weekly_anchor?: string;
};
export type AccountPayoutSettings = {
  debit_negative_balances: boolean;
  schedule: TransferSchedule;
  statement_descriptor?: string | null;
};
export type AccountSepaDebitPaymentsSettings = {
  creditor_id?: string;
};
export type AccountSettings = {
  bacs_debit_payments?: AccountBacsDebitPaymentsSettings;
  branding: AccountBrandingSettings;
  card_payments: AccountCardPaymentsSettings;
  dashboard: AccountDashboardSettings;
  payments: AccountPaymentsSettings;
  payouts?: AccountPayoutSettings;
  sepa_debit_payments?: AccountSepaDebitPaymentsSettings;
};
export type AccountTOSAcceptance = {
  date?: number | null;
  ip?: string | null;
  service_agreement?: string;
  user_agent?: string | null;
};
export type Account = {
  business_profile?: AccountBusinessProfile | null;
  business_type?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | null;
  capabilities?: AccountCapabilities;
  charges_enabled?: boolean;
  company?: LegalEntityCompany;
  country?: string;
  created?: number;
  default_currency?: string;
  details_submitted?: boolean;
  email?: string | null;
  external_accounts?: {
    data: (BankAccount | Card)[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  id: string;
  individual?: Person;
  metadata?: {
    [key: string]: string;
  };
  object: "account";
  payouts_enabled?: boolean;
  requirements?: AccountRequirements;
  settings?: AccountSettings | null;
  tos_acceptance?: AccountTOSAcceptance;
  type?: "custom" | "express" | "standard";
};
export type TransferRecipient = {
  active_account?: BankAccount | null;
  cards?: {
    data: Card[];
    has_more: boolean;
    object: "list";
    url: string;
  } | null;
  created: number;
  default_card?: (string | Card) | null;
  description?: string | null;
  email?: string | null;
  id: string;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  migrated_to?: (string | Account) | null;
  name?: string | null;
  object: "recipient";
  rolled_back_from?: string | Account;
  type: string;
};
export type Card = {
  account?: (string | Account) | null;
  address_city?: string | null;
  address_country?: string | null;
  address_line1?: string | null;
  address_line1_check?: string | null;
  address_line2?: string | null;
  address_state?: string | null;
  address_zip?: string | null;
  address_zip_check?: string | null;
  available_payout_methods?: ("instant" | "standard")[] | null;
  brand: string;
  country?: string | null;
  currency?: string | null;
  customer?: (string | Customer | DeletedCustomer) | null;
  cvc_check?: string | null;
  default_for_currency?: boolean | null;
  dynamic_last4?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding: string;
  id: string;
  last4: string;
  metadata?: {
    [key: string]: string;
  } | null;
  name?: string | null;
  object: "card";
  recipient?: (string | TransferRecipient) | null;
  tokenization_method?: string | null;
};
export type ThreeDSecure = {
  amount: number;
  authenticated: boolean;
  card: Card;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  object: "three_d_secure";
  redirect_url?: string | null;
  status: string;
};
export type Error = {
  error: APIErrors;
};
export type DeletedAccount = {
  deleted: true;
  id: string;
  object: "account";
};
export type Polymorphic = BankAccount | Card;
export type Polymorphic2 = DeletedBankAccount | DeletedCard;
export type AccountCapabilityRequirements = {
  current_deadline?: number | null;
  currently_due: string[];
  disabled_reason?: string | null;
  errors: AccountRequirementsError[];
  eventually_due: string[];
  past_due: string[];
  pending_verification: string[];
};
export type AccountCapability = {
  account: string | Account;
  id: string;
  object: "capability";
  requested: boolean;
  requested_at?: number | null;
  requirements?: AccountCapabilityRequirements;
  status: "active" | "disabled" | "inactive" | "pending" | "unrequested";
};
export type LoginLink = {
  created: number;
  object: "login_link";
  url: string;
};
export type LightAccountLogout = {};
export type DeletedPerson = {
  deleted: true;
  id: string;
  object: "person";
};
export type AccountLink = {
  created: number;
  expires_at: number;
  object: "account_link";
  url: string;
};
export type ApplePayDomain = {
  created: number;
  domain_name: string;
  id: string;
  livemode: boolean;
  object: "apple_pay_domain";
};
export type DeletedApplePayDomain = {
  deleted: true;
  id: string;
  object: "apple_pay_domain";
};
export type BalanceAmountBySourceType = {
  bank_account?: number;
  card?: number;
  fpx?: number;
};
export type BalanceAmount = {
  amount: number;
  currency: string;
  source_types?: BalanceAmountBySourceType;
};
export type BalanceDetail = {
  available: BalanceAmount[];
};
export type Balance = {
  available: BalanceAmount[];
  connect_reserved?: BalanceAmount[];
  instant_available?: BalanceAmount[];
  issuing?: BalanceDetail;
  livemode: boolean;
  object: "balance";
  pending: BalanceAmount[];
};
export type PortalSession = {
  created: number;
  customer: string;
  id: string;
  livemode: boolean;
  object: "billing_portal.session";
  return_url: string;
  url: string;
};
export type LineItemsDiscountAmount = {
  amount: number;
  discount: Discount;
};
export type LineItemsTaxAmount = {
  amount: number;
  rate: TaxRate;
};
export type LineItems = {
  amount_subtotal?: number | null;
  amount_total?: number | null;
  currency: string;
  description: string;
  discounts?: LineItemsDiscountAmount[];
  id: string;
  object: "item";
  price: Price;
  quantity?: number | null;
  taxes?: LineItemsTaxAmount[];
};
export type PaymentPagesPaymentPageResourcesShippingAddressCollection = {
  allowed_countries: (
    | "AC"
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CV"
    | "CW"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SZ"
    | "TA"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "XK"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | "ZZ"
  )[];
};
export type PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown = {
  discounts: LineItemsDiscountAmount[];
  taxes: LineItemsTaxAmount[];
};
export type PaymentPagesCheckoutSessionTotalDetails = {
  amount_discount: number;
  amount_tax: number;
  breakdown?: PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown;
};
export type Session = {
  allow_promotion_codes?: boolean | null;
  amount_subtotal?: number | null;
  amount_total?: number | null;
  billing_address_collection?: ("auto" | "required") | null;
  cancel_url: string;
  client_reference_id?: string | null;
  currency?: string | null;
  customer?: (string | Customer | DeletedCustomer) | null;
  customer_email?: string | null;
  id: string;
  line_items?: {
    data: LineItems[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  livemode: boolean;
  locale?:
    | (
        | "auto"
        | "bg"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "en-GB"
        | "es"
        | "es-419"
        | "et"
        | "fi"
        | "fr"
        | "fr-CA"
        | "hu"
        | "id"
        | "it"
        | "ja"
        | "lt"
        | "lv"
        | "ms"
        | "mt"
        | "nb"
        | "nl"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sl"
        | "sv"
        | "tr"
        | "zh"
        | "zh-HK"
        | "zh-TW"
      )
    | null;
  metadata?: {
    [key: string]: string;
  } | null;
  mode: "payment" | "setup" | "subscription";
  object: "checkout.session";
  payment_intent?: (string | PaymentIntent) | null;
  payment_method_types: string[];
  payment_status: "no_payment_required" | "paid" | "unpaid";
  setup_intent?: (string | SetupIntent) | null;
  shipping?: Shipping | null;
  shipping_address_collection?: PaymentPagesPaymentPageResourcesShippingAddressCollection | null;
  submit_type?: ("auto" | "book" | "donate" | "pay") | null;
  subscription?: (string | Subscription) | null;
  success_url: string;
  total_details?: PaymentPagesCheckoutSessionTotalDetails | null;
};
export type CountrySpecVerificationFieldDetails = {
  additional: string[];
  minimum: string[];
};
export type CountrySpecVerificationFields = {
  company: CountrySpecVerificationFieldDetails;
  individual: CountrySpecVerificationFieldDetails;
};
export type CountrySpec = {
  default_currency: string;
  id: string;
  object: "country_spec";
  supported_bank_account_currencies: {
    [key: string]: string[];
  };
  supported_payment_currencies: string[];
  supported_payment_methods: string[];
  supported_transfer_countries: string[];
  verification_fields: CountrySpecVerificationFields;
};
export type CustomerBalanceTransaction = {
  amount: number;
  created: number;
  credit_note?: (string | CreditNote) | null;
  currency: string;
  customer: string | Customer;
  description?: string | null;
  ending_balance: number;
  id: string;
  invoice?: (string | Invoice) | null;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "customer_balance_transaction";
  type:
    | "adjustment"
    | "applied_to_invoice"
    | "credit_note"
    | "initial"
    | "invoice_too_large"
    | "invoice_too_small"
    | "migration"
    | "unapplied_from_invoice"
    | "unspent_receiver_credit";
};
export type CreditNoteTaxAmount = {
  amount: number;
  inclusive: boolean;
  tax_rate: string | TaxRate;
};
export type CreditNoteLineItem = {
  amount: number;
  description?: string | null;
  discount_amount: number;
  discount_amounts: DiscountsResourceDiscountAmount[];
  id: string;
  invoice_line_item?: string;
  livemode: boolean;
  object: "credit_note_line_item";
  quantity?: number | null;
  tax_amounts: CreditNoteTaxAmount[];
  tax_rates: TaxRate[];
  type: "custom_line_item" | "invoice_line_item";
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
};
export type CreditNote = {
  amount: number;
  created: number;
  currency: string;
  customer: string | Customer | DeletedCustomer;
  customer_balance_transaction?: (string | CustomerBalanceTransaction) | null;
  discount_amount: number;
  discount_amounts: DiscountsResourceDiscountAmount[];
  id: string;
  invoice: string | Invoice;
  lines: {
    data: CreditNoteLineItem[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  livemode: boolean;
  memo?: string | null;
  metadata?: {
    [key: string]: string;
  } | null;
  number: string;
  object: "credit_note";
  out_of_band_amount?: number | null;
  pdf: string;
  reason?:
    | ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory")
    | null;
  refund?: (string | Refund) | null;
  status: "issued" | "void";
  subtotal: number;
  tax_amounts: CreditNoteTaxAmount[];
  total: number;
  type: "post_payment" | "pre_payment";
  voided_at?: number | null;
};
export type Polymorphic3 =
  | Account
  | AlipayAccount
  | BankAccount
  | BitcoinReceiver
  | Card
  | Source;
export type AlipayDeletedAccount = {
  deleted: true;
  id: string;
  object: "alipay_account";
};
export type BitcoinDeletedReceiver = {
  deleted: true;
  id: string;
  object: "bitcoin_receiver";
};
export type Polymorphic4 =
  | AlipayDeletedAccount
  | DeletedBankAccount
  | BitcoinDeletedReceiver
  | DeletedCard;
export type EphemeralKey = {
  created: number;
  expires: number;
  id: string;
  livemode: boolean;
  object: "ephemeral_key";
  secret?: string;
};
export type NotificationEventData = {
  object: object;
  previous_attributes?: object;
};
export type NotificationEventRequest = {
  id?: string | null;
  idempotency_key?: string | null;
};
export type NotificationEvent = {
  account?: string;
  api_version?: string | null;
  created: number;
  data: NotificationEventData;
  id: string;
  livemode: boolean;
  object: "event";
  pending_webhooks: number;
  request?: NotificationEventRequest | null;
  type: string;
};
export type ExchangeRate = {
  id: string;
  object: "exchange_rate";
  rates: {
    [key: string]: number;
  };
};
export type InvoiceItem = {
  amount: number;
  currency: string;
  customer: string | Customer | DeletedCustomer;
  date: number;
  description?: string | null;
  discountable: boolean;
  discounts?: (string | Discount)[] | null;
  id: string;
  invoice?: (string | Invoice) | null;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  object: "invoiceitem";
  period: InvoiceLineItemPeriod;
  price?: Price | null;
  proration: boolean;
  quantity: number;
  subscription?: (string | Subscription) | null;
  subscription_item?: string;
  tax_rates?: TaxRate[] | null;
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
};
export type DeletedInvoiceItem = {
  deleted: true;
  id: string;
  object: "invoiceitem";
};
export type DeletedInvoice = {
  deleted: true;
  id: string;
  object: "invoice";
};
export type IssuerFraudRecord = {
  actionable: boolean;
  charge: string | Charge;
  created: number;
  fraud_type: string;
  has_liability_shift: boolean;
  id: string;
  livemode: boolean;
  object: "issuer_fraud_record";
  post_date: number;
};
export type IssuingSettlement = {
  bin: string;
  clearing_date: number;
  created: number;
  currency: string;
  id: string;
  interchange_fees: number;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  net_total: number;
  network: "visa";
  network_fees: number;
  network_settlement_identifier: string;
  object: "issuing.settlement";
  settlement_service: string;
  transaction_count: number;
  transaction_volume: number;
};
export type PlanTier = {
  flat_amount?: number | null;
  flat_amount_decimal?: string | null;
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
  up_to?: number | null;
};
export type TransformUsage = {
  divide_by: number;
  round: "down" | "up";
};
export type Plan = {
  active: boolean;
  aggregate_usage?: ("last_during_period" | "last_ever" | "max" | "sum") | null;
  amount?: number | null;
  amount_decimal?: string | null;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  id: string;
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
  livemode: boolean;
  metadata?: {
    [key: string]: string;
  } | null;
  nickname?: string | null;
  object: "plan";
  product?: (string | Product | DeletedProduct) | null;
  tiers?: PlanTier[];
  tiers_mode?: ("graduated" | "volume") | null;
  transform_usage?: TransformUsage | null;
  trial_period_days?: number | null;
  usage_type: "licensed" | "metered";
};
export type DeletedPlan = {
  deleted: true;
  id: string;
  object: "plan";
};
export type RadarEarlyFraudWarning = {
  actionable: boolean;
  charge: string | Charge;
  created: number;
  fraud_type: string;
  id: string;
  livemode: boolean;
  object: "radar.early_fraud_warning";
};
export type RadarListListItem = {
  created: number;
  created_by: string;
  id: string;
  livemode: boolean;
  object: "radar.value_list_item";
  value: string;
  value_list: string;
};
export type RadarListDeletedListItem = {
  deleted: true;
  id: string;
  object: "radar.value_list_item";
};
export type RadarListList = {
  alias: string;
  created: number;
  created_by: string;
  id: string;
  item_type:
    | "card_bin"
    | "card_fingerprint"
    | "case_sensitive_string"
    | "country"
    | "email"
    | "ip_address"
    | "string";
  list_items: {
    data: RadarListListItem[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  name: string;
  object: "radar.value_list";
};
export type RadarListDeletedList = {
  deleted: true;
  id: string;
  object: "radar.value_list";
};
export type DeletedTransferRecipient = {
  deleted: true;
  id: string;
  object: "recipient";
};
export type FinancialReportingFinanceReportRunRunParameters = {
  columns?: string[];
  connected_account?: string;
  currency?: string;
  interval_end?: number;
  interval_start?: number;
  payout?: string;
  reporting_category?: string;
  timezone?: string;
};
export type Reporting_report_run = {
  created: number;
  error?: string | null;
  id: string;
  livemode: boolean;
  object: "reporting.report_run";
  parameters: FinancialReportingFinanceReportRunRunParameters;
  report_type: string;
  result?: File | null;
  status: string;
  succeeded_at?: number | null;
};
export type Reporting_report_type = {
  data_available_end: number;
  data_available_start: number;
  default_columns?: string[] | null;
  id: string;
  name: string;
  object: "reporting.report_type";
  updated: number;
  version: number;
};
export type SigmaScheduledQueryRunError = {
  message: string;
};
export type ScheduledQueryRun = {
  created: number;
  data_load_time: number;
  error?: SigmaScheduledQueryRunError;
  file?: File | null;
  id: string;
  livemode: boolean;
  object: "scheduled_query_run";
  result_available_until: number;
  sql: string;
  status: string;
  title: string;
};
export type DeletedSku = {
  deleted: true;
  id: string;
  object: "sku";
};
export type SourceMandateNotificationAcssDebitData = {
  statement_descriptor?: string;
};
export type SourceMandateNotificationBacsDebitData = {
  last4?: string;
};
export type SourceMandateNotificationSepaDebitData = {
  creditor_identifier?: string;
  last4?: string;
  mandate_reference?: string;
};
export type SourceMandateNotification = {
  acss_debit?: SourceMandateNotificationAcssDebitData;
  amount?: number | null;
  bacs_debit?: SourceMandateNotificationBacsDebitData;
  created: number;
  id: string;
  livemode: boolean;
  object: "source_mandate_notification";
  reason: string;
  sepa_debit?: SourceMandateNotificationSepaDebitData;
  source: Source;
  status: string;
  type: string;
};
export type SourceTransactionAchCreditTransferData = {
  customer_data?: string;
  fingerprint?: string;
  last4?: string;
  routing_number?: string;
};
export type SourceTransactionChfCreditTransferData = {
  reference?: string;
  sender_address_country?: string;
  sender_address_line1?: string;
  sender_iban?: string;
  sender_name?: string;
};
export type SourceTransactionGbpCreditTransferData = {
  fingerprint?: string;
  funding_method?: string;
  last4?: string;
  reference?: string;
  sender_account_number?: string;
  sender_name?: string;
  sender_sort_code?: string;
};
export type SourceTransactionPaperCheckData = {
  available_at?: string;
  invoices?: string;
};
export type SourceTransactionSepaCreditTransferData = {
  reference?: string;
  sender_iban?: string;
  sender_name?: string;
};
export type SourceTransaction = {
  ach_credit_transfer?: SourceTransactionAchCreditTransferData;
  amount: number;
  chf_credit_transfer?: SourceTransactionChfCreditTransferData;
  created: number;
  currency: string;
  gbp_credit_transfer?: SourceTransactionGbpCreditTransferData;
  id: string;
  livemode: boolean;
  object: "source_transaction";
  paper_check?: SourceTransactionPaperCheckData;
  sepa_credit_transfer?: SourceTransactionSepaCreditTransferData;
  source: string;
  status: string;
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "alipay"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
};
export type DeletedSubscriptionItem = {
  deleted: true;
  id: string;
  object: "subscription_item";
};
export type Period = {
  end?: number | null;
  start?: number | null;
};
export type UsageRecordSummary = {
  id: string;
  invoice?: string | null;
  livemode: boolean;
  object: "usage_record_summary";
  period: Period;
  subscription_item: string;
  total_usage: number;
};
export type UsageRecord = {
  id: string;
  livemode: boolean;
  object: "usage_record";
  quantity: number;
  subscription_item: string;
  timestamp: number;
};
export type TerminalConnectionToken = {
  location?: string;
  object: "terminal.connection_token";
  secret: string;
};
export type TerminalLocationLocation = {
  address: Address;
  display_name: string;
  id: string;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "terminal.location";
};
export type TerminalLocationDeletedLocation = {
  deleted: true;
  id: string;
  object: "terminal.location";
};
export type TerminalReaderReader = {
  device_sw_version?: string | null;
  device_type: "bbpos_chipper2x" | "verifone_P400";
  id: string;
  ip_address?: string | null;
  label: string;
  livemode: boolean;
  location?: string | null;
  metadata: {
    [key: string]: string;
  };
  object: "terminal.reader";
  serial_number: string;
  status?: string | null;
};
export type TerminalReaderDeletedReader = {
  deleted: true;
  id: string;
  object: "terminal.reader";
};
export type Token = {
  bank_account?: BankAccount;
  card?: Card;
  client_ip?: string | null;
  created: number;
  id: string;
  livemode: boolean;
  object: "token";
  type: string;
  used: boolean;
};
export type NotificationWebhookEndpoint = {
  api_version?: string | null;
  application?: string | null;
  created: number;
  description?: string | null;
  enabled_events: string[];
  id: string;
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  object: "webhook_endpoint";
  secret?: string;
  status: string;
  url: string;
};
export type NotificationWebhookEndpointDeleted = {
  deleted: true;
  id: string;
  object: "webhook_endpoint";
};
/**
 * <p>Initiate 3D Secure authentication.</p>
 */
export function post3DSecure(
  body: {
    amount: number;
    card?: string;
    currency: string;
    customer?: string;
    expand?: string[];
    return_url: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: ThreeDSecure;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/3d_secure",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves a 3D Secure object.</p>
 */
export function get3DSecureThreeDSecure(
  threeDSecure: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: ThreeDSecure;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/3d_secure/${threeDSecure}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>With <a href="/docs/connect">Connect</a>, you can delete Custom or Express accounts you manage.</p>
 *
 * <p>Accounts created using test-mode keys can be deleted at any time. Accounts created using live-mode keys can only be deleted once all balances are zero.</p>
 *
 * <p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/account">account information tab in your account settings</a> instead.</p>
 */
export function deleteAccount(
  body?: {
    account?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedAccount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account",
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an account.</p>
 */
export function getAccount(
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Account;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p>
 *
 * <p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>
 */
export function postAccount(
  body?: {
    account_token?: string;
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    business_profile?: {
      mcc?: string;
      name?: string;
      product_description?: string;
      support_address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      support_email?: string;
      support_phone?: string;
      support_url?: string;
      url?: string;
    };
    business_type?:
      | "company"
      | "government_entity"
      | "individual"
      | "non_profit";
    capabilities?: {
      au_becs_debit_payments?: {
        requested?: boolean;
      };
      bacs_debit_payments?: {
        requested?: boolean;
      };
      bancontact_payments?: {
        requested?: boolean;
      };
      card_issuing?: {
        requested?: boolean;
      };
      card_payments?: {
        requested?: boolean;
      };
      cartes_bancaires_payments?: {
        requested?: boolean;
      };
      eps_payments?: {
        requested?: boolean;
      };
      fpx_payments?: {
        requested?: boolean;
      };
      giropay_payments?: {
        requested?: boolean;
      };
      grabpay_payments?: {
        requested?: boolean;
      };
      ideal_payments?: {
        requested?: boolean;
      };
      jcb_payments?: {
        requested?: boolean;
      };
      legacy_payments?: {
        requested?: boolean;
      };
      oxxo_payments?: {
        requested?: boolean;
      };
      p24_payments?: {
        requested?: boolean;
      };
      sepa_debit_payments?: {
        requested?: boolean;
      };
      sofort_payments?: {
        requested?: boolean;
      };
      tax_reporting_us_1099_k?: {
        requested?: boolean;
      };
      tax_reporting_us_1099_misc?: {
        requested?: boolean;
      };
      transfers?: {
        requested?: boolean;
      };
    };
    company?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      directors_provided?: boolean;
      executives_provided?: boolean;
      name?: string;
      name_kana?: string;
      name_kanji?: string;
      owners_provided?: boolean;
      phone?: string;
      registration_number?: string;
      structure?:
        | ""
        | "government_instrumentality"
        | "governmental_unit"
        | "incorporated_non_profit"
        | "limited_liability_partnership"
        | "multi_member_llc"
        | "private_company"
        | "private_corporation"
        | "private_partnership"
        | "public_company"
        | "public_corporation"
        | "public_partnership"
        | "sole_proprietorship"
        | "tax_exempt_government_instrumentality"
        | "unincorporated_association"
        | "unincorporated_non_profit";
      tax_id?: string;
      tax_id_registrar?: string;
      vat_id?: string;
      verification?: {
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    default_currency?: string;
    email?: string;
    expand?: string[];
    external_account?: string;
    individual?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      dob?:
        | {
            day: number;
            month: number;
            year: number;
          }
        | "";
      email?: string;
      first_name?: string;
      first_name_kana?: string;
      first_name_kanji?: string;
      gender?: string;
      id_number?: string;
      last_name?: string;
      last_name_kana?: string;
      last_name_kanji?: string;
      maiden_name?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      phone?: string;
      political_exposure?: "existing" | "none";
      ssn_last_4?: string;
      verification?: {
        additional_document?: {
          back?: string;
          front?: string;
        };
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    settings?: {
      branding?: {
        icon?: string;
        logo?: string;
        primary_color?: string;
        secondary_color?: string;
      };
      card_payments?: {
        decline_on?: {
          avs_failure?: boolean;
          cvc_failure?: boolean;
        };
        statement_descriptor_prefix?: string;
      };
      payments?: {
        statement_descriptor?: string;
        statement_descriptor_kana?: string;
        statement_descriptor_kanji?: string;
      };
      payouts?: {
        debit_negative_balances?: boolean;
        schedule?: {
          delay_days?: "minimum" | number;
          interval?: "daily" | "manual" | "monthly" | "weekly";
          monthly_anchor?: number;
          weekly_anchor?:
            | "friday"
            | "monday"
            | "saturday"
            | "sunday"
            | "thursday"
            | "tuesday"
            | "wednesday";
        };
        statement_descriptor?: string;
      };
    };
    tos_acceptance?: {
      date?: number;
      ip?: string;
      service_agreement?: string;
      user_agent?: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Account;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Create an external account for a given account.</p>
 */
export function postAccountBankAccounts(
  body?: {
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    default_for_currency?: boolean;
    expand?: string[];
    external_account?: string;
    metadata?: {
      [key: string]: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account/bank_accounts",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a specified external account for a given account.</p>
 */
export function deleteAccountBankAccountsId(
  id: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic2;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/bank_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieve a specified external account for a given account.</p>
 */
export function getAccountBankAccountsId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/bank_accounts/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
 *
 * <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>
 */
export function postAccountBankAccountsId(
  id: string,
  body?: {
    account_holder_name?: string;
    account_holder_type?: "" | "company" | "individual";
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    default_for_currency?: boolean;
    exp_month?: string;
    exp_year?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/bank_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>
 */
export function getAccountCapabilities(
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: AccountCapability[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/capabilities${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves information about the specified Account Capability.</p>
 */
export function getAccountCapabilitiesCapability(
  capability: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: AccountCapability;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/capabilities/${capability}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing Account Capability.</p>
 */
export function postAccountCapabilitiesCapability(
  capability: string,
  body?: {
    expand?: string[];
    requested?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: AccountCapability;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/capabilities/${capability}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>List external accounts for an account.</p>
 */
export function getAccountExternalAccounts(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: (BankAccount | Card)[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/external_accounts${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Create an external account for a given account.</p>
 */
export function postAccountExternalAccounts(
  body?: {
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    default_for_currency?: boolean;
    expand?: string[];
    external_account?: string;
    metadata?: {
      [key: string]: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account/external_accounts",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a specified external account for a given account.</p>
 */
export function deleteAccountExternalAccountsId(
  id: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic2;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/external_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieve a specified external account for a given account.</p>
 */
export function getAccountExternalAccountsId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/external_accounts/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
 *
 * <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>
 */
export function postAccountExternalAccountsId(
  id: string,
  body?: {
    account_holder_name?: string;
    account_holder_type?: "" | "company" | "individual";
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    default_for_currency?: boolean;
    exp_month?: string;
    exp_year?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/external_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>
 *
 * <p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>
 */
export function postAccountLoginLinks(
  body: {
    account: string;
    expand?: string[];
    redirect_url?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: LoginLink;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account/login_links",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p>
 *
 * <p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>
 */
export function putAccountLogout(
  body: {
    account: string;
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: LightAccountLogout;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account/logout",
    oazapfts.form({
      ...opts,
      method: "PUT",
      body,
    })
  );
}
/**
 * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
 */
export function getAccountPeople(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    relationship,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      representative?: boolean;
    };
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Person[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/people${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
        relationship,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new person.</p>
 */
export function postAccountPeople(
  body?: {
    account?: string;
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | "";
    email?: string;
    expand?: string[];
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    gender?: string;
    id_number?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    person_token?: string;
    phone?: string;
    political_exposure?: string;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    verification?: {
      additional_document?: {
        back?: string;
        front?: string;
      };
      document?: {
        back?: string;
        front?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account/people",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
 */
export function deleteAccountPeoplePerson(
  person: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedPerson;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/people/${person}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves an existing person.</p>
 */
export function getAccountPeoplePerson(
  person: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/people/${person}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing person.</p>
 */
export function postAccountPeoplePerson(
  person: string,
  body?: {
    account?: string;
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | "";
    email?: string;
    expand?: string[];
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    gender?: string;
    id_number?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    person_token?: string;
    phone?: string;
    political_exposure?: string;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    verification?: {
      additional_document?: {
        back?: string;
        front?: string;
      };
      document?: {
        back?: string;
        front?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/people/${person}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
 */
export function getAccountPersons(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    relationship,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      representative?: boolean;
    };
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Person[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/persons${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
        relationship,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new person.</p>
 */
export function postAccountPersons(
  body?: {
    account?: string;
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | "";
    email?: string;
    expand?: string[];
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    gender?: string;
    id_number?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    person_token?: string;
    phone?: string;
    political_exposure?: string;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    verification?: {
      additional_document?: {
        back?: string;
        front?: string;
      };
      document?: {
        back?: string;
        front?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account/persons",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
 */
export function deleteAccountPersonsPerson(
  person: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedPerson;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/persons/${person}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves an existing person.</p>
 */
export function getAccountPersonsPerson(
  person: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/persons/${person}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing person.</p>
 */
export function postAccountPersonsPerson(
  person: string,
  body?: {
    account?: string;
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | "";
    email?: string;
    expand?: string[];
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    gender?: string;
    id_number?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    person_token?: string;
    phone?: string;
    political_exposure?: string;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    verification?: {
      additional_document?: {
        back?: string;
        front?: string;
      };
      document?: {
        back?: string;
        front?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/account/persons/${person}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>
 */
export function postAccountLinks(
  body: {
    account: string;
    collect?: "currently_due" | "eventually_due";
    expand?: string[];
    refresh_url?: string;
    return_url?: string;
    type: "account_onboarding" | "account_update";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: AccountLink;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/account_links",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>
 */
export function getAccounts(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Account[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
 * To do this, you’ll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p>
 */
export function postAccounts(
  body?: {
    account_token?: string;
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    business_profile?: {
      mcc?: string;
      name?: string;
      product_description?: string;
      support_address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      support_email?: string;
      support_phone?: string;
      support_url?: string;
      url?: string;
    };
    business_type?:
      | "company"
      | "government_entity"
      | "individual"
      | "non_profit";
    capabilities?: {
      au_becs_debit_payments?: {
        requested?: boolean;
      };
      bacs_debit_payments?: {
        requested?: boolean;
      };
      bancontact_payments?: {
        requested?: boolean;
      };
      card_issuing?: {
        requested?: boolean;
      };
      card_payments?: {
        requested?: boolean;
      };
      cartes_bancaires_payments?: {
        requested?: boolean;
      };
      eps_payments?: {
        requested?: boolean;
      };
      fpx_payments?: {
        requested?: boolean;
      };
      giropay_payments?: {
        requested?: boolean;
      };
      grabpay_payments?: {
        requested?: boolean;
      };
      ideal_payments?: {
        requested?: boolean;
      };
      jcb_payments?: {
        requested?: boolean;
      };
      legacy_payments?: {
        requested?: boolean;
      };
      oxxo_payments?: {
        requested?: boolean;
      };
      p24_payments?: {
        requested?: boolean;
      };
      sepa_debit_payments?: {
        requested?: boolean;
      };
      sofort_payments?: {
        requested?: boolean;
      };
      tax_reporting_us_1099_k?: {
        requested?: boolean;
      };
      tax_reporting_us_1099_misc?: {
        requested?: boolean;
      };
      transfers?: {
        requested?: boolean;
      };
    };
    company?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      directors_provided?: boolean;
      executives_provided?: boolean;
      name?: string;
      name_kana?: string;
      name_kanji?: string;
      owners_provided?: boolean;
      phone?: string;
      registration_number?: string;
      structure?:
        | ""
        | "government_instrumentality"
        | "governmental_unit"
        | "incorporated_non_profit"
        | "limited_liability_partnership"
        | "multi_member_llc"
        | "private_company"
        | "private_corporation"
        | "private_partnership"
        | "public_company"
        | "public_corporation"
        | "public_partnership"
        | "sole_proprietorship"
        | "tax_exempt_government_instrumentality"
        | "unincorporated_association"
        | "unincorporated_non_profit";
      tax_id?: string;
      tax_id_registrar?: string;
      vat_id?: string;
      verification?: {
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    country?: string;
    default_currency?: string;
    email?: string;
    expand?: string[];
    external_account?: string;
    individual?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      dob?:
        | {
            day: number;
            month: number;
            year: number;
          }
        | "";
      email?: string;
      first_name?: string;
      first_name_kana?: string;
      first_name_kanji?: string;
      gender?: string;
      id_number?: string;
      last_name?: string;
      last_name_kana?: string;
      last_name_kanji?: string;
      maiden_name?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      phone?: string;
      political_exposure?: "existing" | "none";
      ssn_last_4?: string;
      verification?: {
        additional_document?: {
          back?: string;
          front?: string;
        };
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    settings?: {
      branding?: {
        icon?: string;
        logo?: string;
        primary_color?: string;
        secondary_color?: string;
      };
      card_payments?: {
        decline_on?: {
          avs_failure?: boolean;
          cvc_failure?: boolean;
        };
        statement_descriptor_prefix?: string;
      };
      payments?: {
        statement_descriptor?: string;
        statement_descriptor_kana?: string;
        statement_descriptor_kanji?: string;
      };
      payouts?: {
        debit_negative_balances?: boolean;
        schedule?: {
          delay_days?: "minimum" | number;
          interval?: "daily" | "manual" | "monthly" | "weekly";
          monthly_anchor?: number;
          weekly_anchor?:
            | "friday"
            | "monday"
            | "saturday"
            | "sunday"
            | "thursday"
            | "tuesday"
            | "wednesday";
        };
        statement_descriptor?: string;
      };
    };
    tos_acceptance?: {
      date?: number;
      ip?: string;
      service_agreement?: string;
      user_agent?: string;
    };
    type?: "custom" | "express" | "standard";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Account;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/accounts",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>With <a href="/docs/connect">Connect</a>, you can delete Custom or Express accounts you manage.</p>
 *
 * <p>Accounts created using test-mode keys can be deleted at any time. Accounts created using live-mode keys can only be deleted once all balances are zero.</p>
 *
 * <p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/account">account information tab in your account settings</a> instead.</p>
 */
export function deleteAccountsAccount(
  account: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedAccount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an account.</p>
 */
export function getAccountsAccount(
  account: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Account;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p>
 *
 * <p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>
 */
export function postAccountsAccount(
  account: string,
  body?: {
    account_token?: string;
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    business_profile?: {
      mcc?: string;
      name?: string;
      product_description?: string;
      support_address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      support_email?: string;
      support_phone?: string;
      support_url?: string;
      url?: string;
    };
    business_type?:
      | "company"
      | "government_entity"
      | "individual"
      | "non_profit";
    capabilities?: {
      au_becs_debit_payments?: {
        requested?: boolean;
      };
      bacs_debit_payments?: {
        requested?: boolean;
      };
      bancontact_payments?: {
        requested?: boolean;
      };
      card_issuing?: {
        requested?: boolean;
      };
      card_payments?: {
        requested?: boolean;
      };
      cartes_bancaires_payments?: {
        requested?: boolean;
      };
      eps_payments?: {
        requested?: boolean;
      };
      fpx_payments?: {
        requested?: boolean;
      };
      giropay_payments?: {
        requested?: boolean;
      };
      grabpay_payments?: {
        requested?: boolean;
      };
      ideal_payments?: {
        requested?: boolean;
      };
      jcb_payments?: {
        requested?: boolean;
      };
      legacy_payments?: {
        requested?: boolean;
      };
      oxxo_payments?: {
        requested?: boolean;
      };
      p24_payments?: {
        requested?: boolean;
      };
      sepa_debit_payments?: {
        requested?: boolean;
      };
      sofort_payments?: {
        requested?: boolean;
      };
      tax_reporting_us_1099_k?: {
        requested?: boolean;
      };
      tax_reporting_us_1099_misc?: {
        requested?: boolean;
      };
      transfers?: {
        requested?: boolean;
      };
    };
    company?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      directors_provided?: boolean;
      executives_provided?: boolean;
      name?: string;
      name_kana?: string;
      name_kanji?: string;
      owners_provided?: boolean;
      phone?: string;
      registration_number?: string;
      structure?:
        | ""
        | "government_instrumentality"
        | "governmental_unit"
        | "incorporated_non_profit"
        | "limited_liability_partnership"
        | "multi_member_llc"
        | "private_company"
        | "private_corporation"
        | "private_partnership"
        | "public_company"
        | "public_corporation"
        | "public_partnership"
        | "sole_proprietorship"
        | "tax_exempt_government_instrumentality"
        | "unincorporated_association"
        | "unincorporated_non_profit";
      tax_id?: string;
      tax_id_registrar?: string;
      vat_id?: string;
      verification?: {
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    default_currency?: string;
    email?: string;
    expand?: string[];
    external_account?: string;
    individual?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      dob?:
        | {
            day: number;
            month: number;
            year: number;
          }
        | "";
      email?: string;
      first_name?: string;
      first_name_kana?: string;
      first_name_kanji?: string;
      gender?: string;
      id_number?: string;
      last_name?: string;
      last_name_kana?: string;
      last_name_kanji?: string;
      maiden_name?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      phone?: string;
      political_exposure?: "existing" | "none";
      ssn_last_4?: string;
      verification?: {
        additional_document?: {
          back?: string;
          front?: string;
        };
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    settings?: {
      branding?: {
        icon?: string;
        logo?: string;
        primary_color?: string;
        secondary_color?: string;
      };
      card_payments?: {
        decline_on?: {
          avs_failure?: boolean;
          cvc_failure?: boolean;
        };
        statement_descriptor_prefix?: string;
      };
      payments?: {
        statement_descriptor?: string;
        statement_descriptor_kana?: string;
        statement_descriptor_kanji?: string;
      };
      payouts?: {
        debit_negative_balances?: boolean;
        schedule?: {
          delay_days?: "minimum" | number;
          interval?: "daily" | "manual" | "monthly" | "weekly";
          monthly_anchor?: number;
          weekly_anchor?:
            | "friday"
            | "monday"
            | "saturday"
            | "sunday"
            | "thursday"
            | "tuesday"
            | "wednesday";
        };
        statement_descriptor?: string;
      };
    };
    tos_acceptance?: {
      date?: number;
      ip?: string;
      service_agreement?: string;
      user_agent?: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Account;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Create an external account for a given account.</p>
 */
export function postAccountsAccountBankAccounts(
  account: string,
  body?: {
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    default_for_currency?: boolean;
    expand?: string[];
    external_account?: string;
    metadata?: {
      [key: string]: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/bank_accounts`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a specified external account for a given account.</p>
 */
export function deleteAccountsAccountBankAccountsId(
  account: string,
  id: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic2;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/bank_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieve a specified external account for a given account.</p>
 */
export function getAccountsAccountBankAccountsId(
  account: string,
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/bank_accounts/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
 *
 * <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>
 */
export function postAccountsAccountBankAccountsId(
  account: string,
  id: string,
  body?: {
    account_holder_name?: string;
    account_holder_type?: "" | "company" | "individual";
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    default_for_currency?: boolean;
    exp_month?: string;
    exp_year?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/bank_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>
 */
export function getAccountsAccountCapabilities(
  account: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: AccountCapability[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/capabilities${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves information about the specified Account Capability.</p>
 */
export function getAccountsAccountCapabilitiesCapability(
  account: string,
  capability: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: AccountCapability;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/capabilities/${capability}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing Account Capability.</p>
 */
export function postAccountsAccountCapabilitiesCapability(
  account: string,
  capability: string,
  body?: {
    expand?: string[];
    requested?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: AccountCapability;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/capabilities/${capability}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>List external accounts for an account.</p>
 */
export function getAccountsAccountExternalAccounts(
  account: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: (BankAccount | Card)[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/external_accounts${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Create an external account for a given account.</p>
 */
export function postAccountsAccountExternalAccounts(
  account: string,
  body?: {
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    default_for_currency?: boolean;
    expand?: string[];
    external_account?: string;
    metadata?: {
      [key: string]: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/external_accounts`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a specified external account for a given account.</p>
 */
export function deleteAccountsAccountExternalAccountsId(
  account: string,
  id: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic2;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/external_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieve a specified external account for a given account.</p>
 */
export function getAccountsAccountExternalAccountsId(
  account: string,
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/external_accounts/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
 *
 * <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>
 */
export function postAccountsAccountExternalAccountsId(
  account: string,
  id: string,
  body?: {
    account_holder_name?: string;
    account_holder_type?: "" | "company" | "individual";
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    default_for_currency?: boolean;
    exp_month?: string;
    exp_year?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/external_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>
 *
 * <p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>
 */
export function postAccountsAccountLoginLinks(
  account: string,
  body?: {
    expand?: string[];
    redirect_url?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: LoginLink;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/login_links`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p>
 *
 * <p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>
 */
export function putAccountsAccountLogout(
  account: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: LightAccountLogout;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/logout`,
    oazapfts.form({
      ...opts,
      method: "PUT",
      body,
    })
  );
}
/**
 * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
 */
export function getAccountsAccountPeople(
  account: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    relationship,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      representative?: boolean;
    };
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Person[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/people${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
        relationship,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new person.</p>
 */
export function postAccountsAccountPeople(
  account: string,
  body?: {
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | "";
    email?: string;
    expand?: string[];
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    gender?: string;
    id_number?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    person_token?: string;
    phone?: string;
    political_exposure?: string;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    verification?: {
      additional_document?: {
        back?: string;
        front?: string;
      };
      document?: {
        back?: string;
        front?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/people`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
 */
export function deleteAccountsAccountPeoplePerson(
  account: string,
  person: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedPerson;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/people/${person}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves an existing person.</p>
 */
export function getAccountsAccountPeoplePerson(
  account: string,
  person: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/people/${person}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing person.</p>
 */
export function postAccountsAccountPeoplePerson(
  account: string,
  person: string,
  body?: {
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | "";
    email?: string;
    expand?: string[];
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    gender?: string;
    id_number?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    person_token?: string;
    phone?: string;
    political_exposure?: string;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    verification?: {
      additional_document?: {
        back?: string;
        front?: string;
      };
      document?: {
        back?: string;
        front?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/people/${person}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
 */
export function getAccountsAccountPersons(
  account: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    relationship,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      representative?: boolean;
    };
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Person[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/persons${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
        relationship,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new person.</p>
 */
export function postAccountsAccountPersons(
  account: string,
  body?: {
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | "";
    email?: string;
    expand?: string[];
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    gender?: string;
    id_number?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    person_token?: string;
    phone?: string;
    political_exposure?: string;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    verification?: {
      additional_document?: {
        back?: string;
        front?: string;
      };
      document?: {
        back?: string;
        front?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/persons`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
 */
export function deleteAccountsAccountPersonsPerson(
  account: string,
  person: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedPerson;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/persons/${person}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves an existing person.</p>
 */
export function getAccountsAccountPersonsPerson(
  account: string,
  person: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/persons/${person}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing person.</p>
 */
export function postAccountsAccountPersonsPerson(
  account: string,
  person: string,
  body?: {
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    address_kana?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    address_kanji?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      town?: string;
    };
    dob?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | "";
    email?: string;
    expand?: string[];
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    gender?: string;
    id_number?: string;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    person_token?: string;
    phone?: string;
    political_exposure?: string;
    relationship?: {
      director?: boolean;
      executive?: boolean;
      owner?: boolean;
      percent_ownership?: number | "";
      representative?: boolean;
      title?: string;
    };
    ssn_last_4?: string;
    verification?: {
      additional_document?: {
        back?: string;
        front?: string;
      };
      document?: {
        back?: string;
        front?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Person;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/persons/${person}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>With <a href="/docs/connect">Connect</a>, you may flag accounts as suspicious.</p>
 *
 * <p>Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.</p>
 */
export function postAccountsAccountReject(
  account: string,
  body: {
    expand?: string[];
    reason: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Account;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/accounts/${account}/reject`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>List apple pay domains.</p>
 */
export function getApplePayDomains(
  body?: {},
  {
    domainName,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    domainName?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: ApplePayDomain[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/apple_pay/domains${QS.query(
      QS.form({
        domain_name: domainName,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Create an apple pay domain.</p>
 */
export function postApplePayDomains(
  body: {
    domain_name: string;
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: ApplePayDomain;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/apple_pay/domains",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete an apple pay domain.</p>
 */
export function deleteApplePayDomainsDomain(
  domain: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedApplePayDomain;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/apple_pay/domains/${domain}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieve an apple pay domain.</p>
 */
export function getApplePayDomainsDomain(
  domain: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: ApplePayDomain;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/apple_pay/domains/${domain}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>
 */
export function getApplicationFees(
  body?: {},
  {
    charge,
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    charge?: string;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: PlatformFee[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/application_fees${QS.query(
      QS.form({
        charge,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>
 */
export function getApplicationFeesFeeRefundsId(
  fee: string,
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: FeeRefund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/application_fees/${fee}/refunds/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 *
 * <p>This request only accepts metadata as an argument.</p>
 */
export function postApplicationFeesFeeRefundsId(
  fee: string,
  id: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: FeeRefund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/application_fees/${fee}/refunds/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>
 */
export function getApplicationFeesId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PlatformFee;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/application_fees/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
export function postApplicationFeesIdRefund(
  id: string,
  body?: {
    amount?: number;
    directive?: string;
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PlatformFee;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/application_fees/${id}/refund`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
 */
export function getApplicationFeesIdRefunds(
  id: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: FeeRefund[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/application_fees/${id}/refunds${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Refunds an application fee that has previously been collected but not yet refunded.
 * Funds will be refunded to the Stripe account from which the fee was originally collected.</p>
 *
 * <p>You can optionally refund only part of an application fee.
 * You can do so multiple times, until the entire fee has been refunded.</p>
 *
 * <p>Once entirely refunded, an application fee can’t be refunded again.
 * This method will raise an error when called on an already-refunded application fee,
 * or when trying to refund more money than is left on an application fee.</p>
 */
export function postApplicationFeesIdRefunds(
  id: string,
  body?: {
    amount?: number;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: FeeRefund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/application_fees/${id}/refunds`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the current account balance, based on the authentication that was used to make the request.
 *  For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>
 */
export function getBalance(
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Balance;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/balance${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>
 *
 * <p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>
 */
export function getBalanceHistory(
  body?: {},
  {
    availableOn,
    created,
    currency,
    endingBefore,
    expand,
    limit,
    payout,
    source,
    startingAfter,
    type,
  }: {
    availableOn?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    currency?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    payout?: string;
    source?: string;
    startingAfter?: string;
    type?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: BalanceTransaction[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/balance/history${QS.query(
      QS.deep({
        available_on: availableOn,
        created,
        expand,
      }),
      QS.form({
        currency,
        ending_before: endingBefore,
        limit,
        payout,
        source,
        starting_after: startingAfter,
        type,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the balance transaction with the given ID.</p>
 *
 * <p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>
 */
export function getBalanceHistoryId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: BalanceTransaction;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/balance/history/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>
 *
 * <p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>
 */
export function getBalanceTransactions(
  body?: {},
  {
    availableOn,
    created,
    currency,
    endingBefore,
    expand,
    limit,
    payout,
    source,
    startingAfter,
    type,
  }: {
    availableOn?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    currency?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    payout?: string;
    source?: string;
    startingAfter?: string;
    type?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: BalanceTransaction[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/balance_transactions${QS.query(
      QS.deep({
        available_on: availableOn,
        created,
        expand,
      }),
      QS.form({
        currency,
        ending_before: endingBefore,
        limit,
        payout,
        source,
        starting_after: startingAfter,
        type,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the balance transaction with the given ID.</p>
 *
 * <p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>
 */
export function getBalanceTransactionsId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: BalanceTransaction;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/balance_transactions/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a session of the customer portal.</p>
 */
export function postBillingPortalSessions(
  body: {
    customer: string;
    expand?: string[];
    return_url?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PortalSession;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/billing_portal/sessions",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.</p>
 */
export function getBitcoinReceivers(
  body?: {},
  {
    active,
    endingBefore,
    expand,
    filled,
    limit,
    startingAfter,
    uncapturedFunds,
  }: {
    active?: boolean;
    endingBefore?: string;
    expand?: string[];
    filled?: boolean;
    limit?: number;
    startingAfter?: string;
    uncapturedFunds?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: BitcoinReceiver[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/bitcoin/receivers${QS.query(
      QS.form({
        active,
        ending_before: endingBefore,
        filled,
        limit,
        starting_after: startingAfter,
        uncaptured_funds: uncapturedFunds,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the Bitcoin receiver with the given ID.</p>
 */
export function getBitcoinReceiversId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: BitcoinReceiver;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/bitcoin/receivers/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>List bitcoin transacitons for a given receiver.</p>
 */
export function getBitcoinReceiversReceiverTransactions(
  receiver: string,
  body?: {},
  {
    customer,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: BitcoinTransaction[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/bitcoin/receivers/${receiver}/transactions${QS.query(
      QS.form({
        customer,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>List bitcoin transacitons for a given receiver.</p>
 */
export function getBitcoinTransactions(
  body?: {},
  {
    customer,
    endingBefore,
    expand,
    limit,
    receiver,
    startingAfter,
  }: {
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    receiver?: string;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: BitcoinTransaction[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/bitcoin/transactions${QS.query(
      QS.form({
        customer,
        ending_before: endingBefore,
        limit,
        receiver,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>
 */
export function getCharges(
  body?: {},
  {
    created,
    customer,
    endingBefore,
    expand,
    limit,
    paymentIntent,
    startingAfter,
    transferGroup,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    paymentIntent?: string;
    startingAfter?: string;
    transferGroup?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Charge[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        customer,
        ending_before: endingBefore,
        limit,
        payment_intent: paymentIntent,
        starting_after: startingAfter,
        transfer_group: transferGroup,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>To charge a credit card or other payment source, you create a <code>Charge</code> object. If your API key is in test mode, the supplied payment source (e.g., card) won’t actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).</p>
 */
export function postCharges(
  body?: {
    amount?: number;
    application_fee?: number;
    application_fee_amount?: number;
    capture?: boolean;
    card?:
      | {
          address_city?: string;
          address_country?: string;
          address_line1?: string;
          address_line2?: string;
          address_state?: string;
          address_zip?: string;
          cvc?: string;
          exp_month: number;
          exp_year: number;
          metadata?: {
            [key: string]: string;
          };
          name?: string;
          number: string;
          object?: "card";
        }
      | string;
    currency?: string;
    customer?: string;
    description?: string;
    destination?:
      | {
          account: string;
          amount?: number;
        }
      | string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    on_behalf_of?: string;
    receipt_email?: string;
    shipping?: {
      address: {
        city?: string;
        country?: string;
        line1: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      carrier?: string;
      name: string;
      phone?: string;
      tracking_number?: string;
    };
    source?: string;
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    transfer_data?: {
      amount?: number;
      destination: string;
    };
    transfer_group?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Charge;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/charges",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>
 */
export function getChargesCharge(
  charge: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Charge;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postChargesCharge(
  charge: string,
  body?: {
    customer?: string;
    description?: string;
    expand?: string[];
    fraud_details?: {
      user_report: "" | "fraudulent" | "safe";
    };
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    receipt_email?: string;
    shipping?: {
      address: {
        city?: string;
        country?: string;
        line1: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      carrier?: string;
      name: string;
      phone?: string;
      tracking_number?: string;
    };
    transfer_group?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Charge;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you <a href="#create_charge">created a charge</a> with the capture option set to false.</p>
 *
 * <p>Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.</p>
 */
export function postChargesChargeCapture(
  charge: string,
  body?: {
    amount?: number;
    application_fee?: number;
    application_fee_amount?: number;
    expand?: string[];
    receipt_email?: string;
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    transfer_data?: {
      amount?: number;
    };
    transfer_group?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Charge;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/capture`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieve a dispute for a specified charge.</p>
 */
export function getChargesChargeDispute(
  charge: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Dispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/dispute${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
export function postChargesChargeDispute(
  charge: string,
  body?: {
    evidence?: {
      access_activity_log?: string;
      billing_address?: string;
      cancellation_policy?: string;
      cancellation_policy_disclosure?: string;
      cancellation_rebuttal?: string;
      customer_communication?: string;
      customer_email_address?: string;
      customer_name?: string;
      customer_purchase_ip?: string;
      customer_signature?: string;
      duplicate_charge_documentation?: string;
      duplicate_charge_explanation?: string;
      duplicate_charge_id?: string;
      product_description?: string;
      receipt?: string;
      refund_policy?: string;
      refund_policy_disclosure?: string;
      refund_refusal_explanation?: string;
      service_date?: string;
      service_documentation?: string;
      shipping_address?: string;
      shipping_carrier?: string;
      shipping_date?: string;
      shipping_documentation?: string;
      shipping_tracking_number?: string;
      uncategorized_file?: string;
      uncategorized_text?: string;
    };
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    submit?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Dispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/dispute`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
export function postChargesChargeDisputeClose(
  charge: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Dispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/dispute/close`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>
 *
 * <p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
 * Funds will be refunded to the credit or debit card that was originally charged.</p>
 *
 * <p>You can optionally refund only part of a charge.
 * You can do so multiple times, until the entire charge has been refunded.</p>
 *
 * <p>Once entirely refunded, a charge can’t be refunded again.
 * This method will raise an error when called on an already-refunded charge,
 * or when trying to refund more money than is left on a charge.</p>
 */
export function postChargesChargeRefund(
  charge: string,
  body?: {
    amount?: number;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    payment_intent?: string;
    reason?: "duplicate" | "fraudulent" | "requested_by_customer";
    refund_application_fee?: boolean;
    reverse_transfer?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Charge;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/refund`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
 */
export function getChargesChargeRefunds(
  charge: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Refund[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/refunds${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Create a refund.</p>
 */
export function postChargesChargeRefunds(
  charge: string,
  body?: {
    amount?: number;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    payment_intent?: string;
    reason?: "duplicate" | "fraudulent" | "requested_by_customer";
    refund_application_fee?: boolean;
    reverse_transfer?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Refund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/refunds`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing refund.</p>
 */
export function getChargesChargeRefundsRefund(
  charge: string,
  refund: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Refund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/refunds/${refund}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Update a specified refund.</p>
 */
export function postChargesChargeRefundsRefund(
  charge: string,
  refund: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Refund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/charges/${charge}/refunds/${refund}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of Checkout Sessions.</p>
 */
export function getCheckoutSessions(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    paymentIntent,
    startingAfter,
    subscription,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    paymentIntent?: string;
    startingAfter?: string;
    subscription?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Session[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/checkout/sessions${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        payment_intent: paymentIntent,
        starting_after: startingAfter,
        subscription,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a Session object.</p>
 */
export function postCheckoutSessions(
  body: {
    allow_promotion_codes?: boolean;
    billing_address_collection?: "auto" | "required";
    cancel_url: string;
    client_reference_id?: string;
    customer?: string;
    customer_email?: string;
    discounts?: {
      coupon?: string;
      promotion_code?: string;
    }[];
    expand?: string[];
    line_items?: {
      amount?: number;
      currency?: string;
      description?: string;
      images?: string[];
      name?: string;
      price?: string;
      price_data?: {
        currency: string;
        product?: string;
        product_data?: {
          description?: string;
          images?: string[];
          metadata?: {
            [key: string]: string;
          };
          name: string;
        };
        recurring?: {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        };
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity: number;
      tax_rates?: string[];
    }[];
    locale?:
      | "auto"
      | "bg"
      | "cs"
      | "da"
      | "de"
      | "el"
      | "en"
      | "en-GB"
      | "es"
      | "es-419"
      | "et"
      | "fi"
      | "fr"
      | "fr-CA"
      | "hu"
      | "id"
      | "it"
      | "ja"
      | "lt"
      | "lv"
      | "ms"
      | "mt"
      | "nb"
      | "nl"
      | "pl"
      | "pt"
      | "pt-BR"
      | "ro"
      | "ru"
      | "sk"
      | "sl"
      | "sv"
      | "tr"
      | "zh"
      | "zh-HK"
      | "zh-TW";
    metadata?: {
      [key: string]: string;
    };
    mode?: "payment" | "setup" | "subscription";
    payment_intent_data?: {
      application_fee_amount?: number;
      capture_method?: "automatic" | "manual";
      description?: string;
      metadata?: {
        [key: string]: string;
      };
      on_behalf_of?: string;
      receipt_email?: string;
      setup_future_usage?: "off_session" | "on_session";
      shipping?: {
        address: {
          city?: string;
          country?: string;
          line1: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        };
        carrier?: string;
        name: string;
        phone?: string;
        tracking_number?: string;
      };
      statement_descriptor?: string;
      statement_descriptor_suffix?: string;
      transfer_data?: {
        amount?: number;
        destination: string;
      };
      transfer_group?: string;
    };
    payment_method_types: (
      | "alipay"
      | "bacs_debit"
      | "bancontact"
      | "card"
      | "eps"
      | "fpx"
      | "giropay"
      | "grabpay"
      | "ideal"
      | "p24"
      | "sepa_debit"
      | "sofort"
    )[];
    setup_intent_data?: {
      description?: string;
      metadata?: {
        [key: string]: string;
      };
      on_behalf_of?: string;
    };
    shipping_address_collection?: {
      allowed_countries: (
        | "AC"
        | "AD"
        | "AE"
        | "AF"
        | "AG"
        | "AI"
        | "AL"
        | "AM"
        | "AO"
        | "AQ"
        | "AR"
        | "AT"
        | "AU"
        | "AW"
        | "AX"
        | "AZ"
        | "BA"
        | "BB"
        | "BD"
        | "BE"
        | "BF"
        | "BG"
        | "BH"
        | "BI"
        | "BJ"
        | "BL"
        | "BM"
        | "BN"
        | "BO"
        | "BQ"
        | "BR"
        | "BS"
        | "BT"
        | "BV"
        | "BW"
        | "BY"
        | "BZ"
        | "CA"
        | "CD"
        | "CF"
        | "CG"
        | "CH"
        | "CI"
        | "CK"
        | "CL"
        | "CM"
        | "CN"
        | "CO"
        | "CR"
        | "CV"
        | "CW"
        | "CY"
        | "CZ"
        | "DE"
        | "DJ"
        | "DK"
        | "DM"
        | "DO"
        | "DZ"
        | "EC"
        | "EE"
        | "EG"
        | "EH"
        | "ER"
        | "ES"
        | "ET"
        | "FI"
        | "FJ"
        | "FK"
        | "FO"
        | "FR"
        | "GA"
        | "GB"
        | "GD"
        | "GE"
        | "GF"
        | "GG"
        | "GH"
        | "GI"
        | "GL"
        | "GM"
        | "GN"
        | "GP"
        | "GQ"
        | "GR"
        | "GS"
        | "GT"
        | "GU"
        | "GW"
        | "GY"
        | "HK"
        | "HN"
        | "HR"
        | "HT"
        | "HU"
        | "ID"
        | "IE"
        | "IL"
        | "IM"
        | "IN"
        | "IO"
        | "IQ"
        | "IS"
        | "IT"
        | "JE"
        | "JM"
        | "JO"
        | "JP"
        | "KE"
        | "KG"
        | "KH"
        | "KI"
        | "KM"
        | "KN"
        | "KR"
        | "KW"
        | "KY"
        | "KZ"
        | "LA"
        | "LB"
        | "LC"
        | "LI"
        | "LK"
        | "LR"
        | "LS"
        | "LT"
        | "LU"
        | "LV"
        | "LY"
        | "MA"
        | "MC"
        | "MD"
        | "ME"
        | "MF"
        | "MG"
        | "MK"
        | "ML"
        | "MM"
        | "MN"
        | "MO"
        | "MQ"
        | "MR"
        | "MS"
        | "MT"
        | "MU"
        | "MV"
        | "MW"
        | "MX"
        | "MY"
        | "MZ"
        | "NA"
        | "NC"
        | "NE"
        | "NG"
        | "NI"
        | "NL"
        | "NO"
        | "NP"
        | "NR"
        | "NU"
        | "NZ"
        | "OM"
        | "PA"
        | "PE"
        | "PF"
        | "PG"
        | "PH"
        | "PK"
        | "PL"
        | "PM"
        | "PN"
        | "PR"
        | "PS"
        | "PT"
        | "PY"
        | "QA"
        | "RE"
        | "RO"
        | "RS"
        | "RU"
        | "RW"
        | "SA"
        | "SB"
        | "SC"
        | "SE"
        | "SG"
        | "SH"
        | "SI"
        | "SJ"
        | "SK"
        | "SL"
        | "SM"
        | "SN"
        | "SO"
        | "SR"
        | "SS"
        | "ST"
        | "SV"
        | "SX"
        | "SZ"
        | "TA"
        | "TC"
        | "TD"
        | "TF"
        | "TG"
        | "TH"
        | "TJ"
        | "TK"
        | "TL"
        | "TM"
        | "TN"
        | "TO"
        | "TR"
        | "TT"
        | "TV"
        | "TW"
        | "TZ"
        | "UA"
        | "UG"
        | "US"
        | "UY"
        | "UZ"
        | "VA"
        | "VC"
        | "VE"
        | "VG"
        | "VN"
        | "VU"
        | "WF"
        | "WS"
        | "XK"
        | "YE"
        | "YT"
        | "ZA"
        | "ZM"
        | "ZW"
        | "ZZ"
      )[];
    };
    submit_type?: "auto" | "book" | "donate" | "pay";
    subscription_data?: {
      application_fee_percent?: number;
      default_tax_rates?: string[];
      items?: {
        plan: string;
        quantity?: number;
        tax_rates?: string[];
      }[];
      metadata?: {
        [key: string]: string;
      };
      trial_end?: number;
      trial_period_days?: number;
    };
    success_url: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Session;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/checkout/sessions",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves a Session object.</p>
 */
export function getCheckoutSessionsSession(
  session: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Session;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/checkout/sessions/${session}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When retrieving a Checkout Session, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
 */
export function getCheckoutSessionsSessionLineItems(
  session: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: LineItems[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/checkout/sessions/${session}/line_items${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Lists all Country Spec objects available in the API.</p>
 */
export function getCountrySpecs(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: CountrySpec[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/country_specs${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a Country Spec for a given Country code.</p>
 */
export function getCountrySpecsCountry(
  country: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CountrySpec;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/country_specs/${country}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of your coupons.</p>
 */
export function getCoupons(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Coupon[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/coupons${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>
 *
 * <p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>
 */
export function postCoupons(
  body: {
    amount_off?: number;
    applies_to?: {
      products: string[];
    };
    currency?: string;
    duration: "forever" | "once" | "repeating";
    duration_in_months?: number;
    expand?: string[];
    id?: string;
    max_redemptions?: number;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
    percent_off?: number;
    redeem_by?: number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Coupon;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/coupons",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>
 */
export function deleteCouponsCoupon(
  coupon: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedCoupon;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/coupons/${coupon}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the coupon with the given ID.</p>
 */
export function getCouponsCoupon(
  coupon: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Coupon;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/coupons/${coupon}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>
 */
export function postCouponsCoupon(
  coupon: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Coupon;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/coupons/${coupon}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of credit notes.</p>
 */
export function getCreditNotes(
  body?: {},
  {
    customer,
    endingBefore,
    expand,
    invoice,
    limit,
    startingAfter,
  }: {
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    invoice?: string;
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: CreditNote[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/credit_notes${QS.query(
      QS.form({
        customer,
        ending_before: endingBefore,
        invoice,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Issue a credit note to adjust the amount of a finalized invoice. For a <code>status=open</code> invoice, a credit note reduces
 * its <code>amount_due</code>. For a <code>status=paid</code> invoice, a credit note does not affect its <code>amount_due</code>. Instead, it can result
 * in any combination of the following:</p>
 *
 * <ul>
 * <li>Refund: create a new refund (using <code>refund_amount</code>) or link an existing refund (using <code>refund</code>).</li>
 * <li>Customer balance credit: credit the customer’s balance (using <code>credit_amount</code>) which will be automatically applied to their next invoice when it’s finalized.</li>
 * <li>Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using <code>out_of_band_amount</code>).</li>
 * </ul>
 *
 * <p>For post-payment credit notes the sum of the refund, credit and outside of Stripe amounts must equal the credit note total.</p>
 *
 * <p>You may issue multiple credit notes for an invoice. Each credit note will increment the invoice’s <code>pre_payment_credit_notes_amount</code>
 * or <code>post_payment_credit_notes_amount</code> depending on its <code>status</code> at the time of credit note creation.</p>
 */
export function postCreditNotes(
  body: {
    amount?: number;
    credit_amount?: number;
    expand?: string[];
    invoice: string;
    lines?: {
      amount?: number;
      description?: string;
      invoice_line_item?: string;
      quantity?: number;
      tax_rates?: string[] | "";
      type: "custom_line_item" | "invoice_line_item";
      unit_amount?: number;
      unit_amount_decimal?: string;
    }[];
    memo?: string;
    metadata?: {
      [key: string]: string;
    };
    out_of_band_amount?: number;
    reason?:
      | "duplicate"
      | "fraudulent"
      | "order_change"
      | "product_unsatisfactory";
    refund?: string;
    refund_amount?: number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CreditNote;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/credit_notes",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Get a preview of a credit note without creating it.</p>
 */
export function getCreditNotesPreview(
  invoice: string,
  body?: {},
  {
    amount,
    creditAmount,
    expand,
    lines,
    memo,
    metadata,
    outOfBandAmount,
    reason,
    refund,
    refundAmount,
  }: {
    amount?: number;
    creditAmount?: number;
    expand?: string[];
    lines?: {
      amount?: number;
      description?: string;
      invoice_line_item?: string;
      quantity?: number;
      tax_rates?: string[] | "";
      type: "custom_line_item" | "invoice_line_item";
      unit_amount?: number;
      unit_amount_decimal?: string;
    }[];
    memo?: string;
    metadata?: {
      [key: string]: string;
    };
    outOfBandAmount?: number;
    reason?:
      | "duplicate"
      | "fraudulent"
      | "order_change"
      | "product_unsatisfactory";
    refund?: string;
    refundAmount?: number;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CreditNote;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/credit_notes/preview${QS.query(
      QS.form({
        amount,
        credit_amount: creditAmount,
        invoice,
        memo,
        out_of_band_amount: outOfBandAmount,
        reason,
        refund,
        refund_amount: refundAmount,
      }),
      QS.deep({
        expand,
        lines,
        metadata,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When retrieving a credit note preview, you’ll get a <strong>lines</strong> property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.</p>
 */
export function getCreditNotesPreviewLines(
  invoice: string,
  body?: {},
  {
    amount,
    creditAmount,
    endingBefore,
    expand,
    limit,
    lines,
    memo,
    metadata,
    outOfBandAmount,
    reason,
    refund,
    refundAmount,
    startingAfter,
  }: {
    amount?: number;
    creditAmount?: number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    lines?: {
      amount?: number;
      description?: string;
      invoice_line_item?: string;
      quantity?: number;
      tax_rates?: string[] | "";
      type: "custom_line_item" | "invoice_line_item";
      unit_amount?: number;
      unit_amount_decimal?: string;
    }[];
    memo?: string;
    metadata?: {
      [key: string]: string;
    };
    outOfBandAmount?: number;
    reason?:
      | "duplicate"
      | "fraudulent"
      | "order_change"
      | "product_unsatisfactory";
    refund?: string;
    refundAmount?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: CreditNoteLineItem[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/credit_notes/preview/lines${QS.query(
      QS.form({
        amount,
        credit_amount: creditAmount,
        ending_before: endingBefore,
        invoice,
        limit,
        memo,
        out_of_band_amount: outOfBandAmount,
        reason,
        refund,
        refund_amount: refundAmount,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
        lines,
        metadata,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When retrieving a credit note, you’ll get a <strong>lines</strong> property containing the the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
 */
export function getCreditNotesCreditNoteLines(
  creditNote: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: CreditNoteLineItem[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/credit_notes/${creditNote}/lines${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the credit note object with the given identifier.</p>
 */
export function getCreditNotesId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CreditNote;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/credit_notes/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing credit note.</p>
 */
export function postCreditNotesId(
  id: string,
  body?: {
    expand?: string[];
    memo?: string;
    metadata?: {
      [key: string]: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CreditNote;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/credit_notes/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p>
 */
export function postCreditNotesIdVoid(
  id: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CreditNote;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/credit_notes/${id}/void`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>
 */
export function getCustomers(
  body?: {},
  {
    created,
    email,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    email?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Customer[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        email,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new customer object.</p>
 */
export function postCustomers(
  body?: {
    address?:
      | {
          city?: string;
          country?: string;
          line1: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        }
      | "";
    balance?: number;
    coupon?: string;
    description?: string;
    email?: string;
    expand?: string[];
    invoice_prefix?: string;
    invoice_settings?: {
      custom_fields?:
        | {
            name: string;
            value: string;
          }[]
        | "";
      default_payment_method?: string;
      footer?: string;
    };
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
    next_invoice_sequence?: number;
    payment_method?: string;
    phone?: string;
    preferred_locales?: string[];
    promotion_code?: string;
    shipping?:
      | {
          address: {
            city?: string;
            country?: string;
            line1: string;
            line2?: string;
            postal_code?: string;
            state?: string;
          };
          name: string;
          phone?: string;
        }
      | "";
    source?: string;
    tax_exempt?: "" | "exempt" | "none" | "reverse";
    tax_id_data?: {
      type:
        | "ae_trn"
        | "au_abn"
        | "br_cnpj"
        | "br_cpf"
        | "ca_bn"
        | "ca_qst"
        | "ch_vat"
        | "cl_tin"
        | "es_cif"
        | "eu_vat"
        | "hk_br"
        | "id_npwp"
        | "in_gst"
        | "jp_cn"
        | "jp_rn"
        | "kr_brn"
        | "li_uid"
        | "mx_rfc"
        | "my_frp"
        | "my_itn"
        | "my_sst"
        | "no_vat"
        | "nz_gst"
        | "ru_inn"
        | "ru_kpp"
        | "sa_vat"
        | "sg_gst"
        | "sg_uen"
        | "th_vat"
        | "tw_vat"
        | "us_ein"
        | "za_vat";
      value: string;
    }[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Customer;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/customers",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>
 */
export function deleteCustomersCustomer(
  customer: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedCustomer;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.</p>
 */
export function getCustomersCustomer(
  customer: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Customer | DeletedCustomer;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer’s active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>
 *
 * <p>This request accepts mostly the same arguments as the customer creation call.</p>
 */
export function postCustomersCustomer(
  customer: string,
  body?: {
    address?:
      | {
          city?: string;
          country?: string;
          line1: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        }
      | "";
    balance?: number;
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    card?:
      | {
          address_city?: string;
          address_country?: string;
          address_line1?: string;
          address_line2?: string;
          address_state?: string;
          address_zip?: string;
          cvc?: string;
          exp_month: number;
          exp_year: number;
          metadata?: {
            [key: string]: string;
          };
          name?: string;
          number: string;
          object?: "card";
        }
      | string;
    coupon?: string;
    default_alipay_account?: string;
    default_bank_account?: string;
    default_card?: string;
    default_source?: string;
    description?: string;
    email?: string;
    expand?: string[];
    invoice_prefix?: string;
    invoice_settings?: {
      custom_fields?:
        | {
            name: string;
            value: string;
          }[]
        | "";
      default_payment_method?: string;
      footer?: string;
    };
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
    next_invoice_sequence?: number;
    phone?: string;
    preferred_locales?: string[];
    promotion_code?: string;
    shipping?:
      | {
          address: {
            city?: string;
            country?: string;
            line1: string;
            line2?: string;
            postal_code?: string;
            state?: string;
          };
          name: string;
          phone?: string;
        }
      | "";
    source?: string;
    tax_exempt?: "" | "exempt" | "none" | "reverse";
    trial_end?: "now" | number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Customer;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of transactions that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
 */
export function getCustomersCustomerBalanceTransactions(
  customer: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: CustomerBalanceTransaction[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/balance_transactions${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates an immutable transaction that updates the customer’s credit <a href="/docs/billing/customer/balance">balance</a>.</p>
 */
export function postCustomersCustomerBalanceTransactions(
  customer: string,
  body: {
    amount: number;
    currency: string;
    description?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CustomerBalanceTransaction;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/balance_transactions`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
 */
export function getCustomersCustomerBalanceTransactionsTransaction(
  customer: string,
  transaction: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CustomerBalanceTransaction;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/balance_transactions/${transaction}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p>
 */
export function postCustomersCustomerBalanceTransactionsTransaction(
  customer: string,
  transaction: string,
  body?: {
    description?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: CustomerBalanceTransaction;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/balance_transactions/${transaction}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional bank accounts.</p>
 */
export function getCustomersCustomerBankAccounts(
  customer: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: BankAccount[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/bank_accounts${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
 *
 * <p>If the card’s owner has no default card, then the new card will become the default.
 * However, if the owner already has a default, then it will not change.
 * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
 */
export function postCustomersCustomerBankAccounts(
  customer: string,
  body?: {
    alipay_account?: string;
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    card?:
      | {
          address_city?: string;
          address_country?: string;
          address_line1?: string;
          address_line2?: string;
          address_state?: string;
          address_zip?: string;
          cvc?: string;
          exp_month: number;
          exp_year: number;
          metadata?: {
            [key: string]: string;
          };
          name?: string;
          number: string;
          object?: "card";
        }
      | string;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    source?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic3;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/bank_accounts`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a specified source for a given customer.</p>
 */
export function deleteCustomersCustomerBankAccountsId(
  customer: string,
  id: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic3 | Polymorphic4;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/bank_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p>
 */
export function getCustomersCustomerBankAccountsId(
  customer: string,
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: BankAccount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/bank_accounts/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Update a specified source for a given customer.</p>
 */
export function postCustomersCustomerBankAccountsId(
  customer: string,
  id: string,
  body?: {
    account_holder_name?: string;
    account_holder_type?: "company" | "individual";
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    exp_month?: string;
    exp_year?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
    owner?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      email?: string;
      name?: string;
      phone?: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Card | BankAccount | Source;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/bank_accounts/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Verify a specified bank account for a given customer.</p>
 */
export function postCustomersCustomerBankAccountsIdVerify(
  customer: string,
  id: string,
  body?: {
    amounts?: number[];
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: BankAccount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/bank_accounts/${id}/verify`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can see a list of the cards belonging to a customer.
 * Note that the 10 most recent sources are always available on the <code>Customer</code> object.
 * If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional cards.</p>
 */
export function getCustomersCustomerCards(
  customer: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Card[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/cards${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
 *
 * <p>If the card’s owner has no default card, then the new card will become the default.
 * However, if the owner already has a default, then it will not change.
 * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
 */
export function postCustomersCustomerCards(
  customer: string,
  body?: {
    alipay_account?: string;
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    card?:
      | {
          address_city?: string;
          address_country?: string;
          address_line1?: string;
          address_line2?: string;
          address_state?: string;
          address_zip?: string;
          cvc?: string;
          exp_month: number;
          exp_year: number;
          metadata?: {
            [key: string]: string;
          };
          name?: string;
          number: string;
          object?: "card";
        }
      | string;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    source?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic3;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/cards`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a specified source for a given customer.</p>
 */
export function deleteCustomersCustomerCardsId(
  customer: string,
  id: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic3 | Polymorphic4;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/cards/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p>
 */
export function getCustomersCustomerCardsId(
  customer: string,
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Card;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/cards/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Update a specified source for a given customer.</p>
 */
export function postCustomersCustomerCardsId(
  customer: string,
  id: string,
  body?: {
    account_holder_name?: string;
    account_holder_type?: "company" | "individual";
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    exp_month?: string;
    exp_year?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
    owner?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      email?: string;
      name?: string;
      phone?: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Card | BankAccount | Source;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/cards/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Removes the currently applied discount on a customer.</p>
 */
export function deleteCustomersCustomerDiscount(
  customer: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedDiscount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/discount`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
export function getCustomersCustomerDiscount(
  customer: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Discount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/discount${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>List sources for a specified customer.</p>
 */
export function getCustomersCustomerSources(
  customer: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    object,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    object?: string;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: (
            | AlipayAccount
            | BankAccount
            | BitcoinReceiver
            | Card
            | Source
          )[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/sources${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        object,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
 *
 * <p>If the card’s owner has no default card, then the new card will become the default.
 * However, if the owner already has a default, then it will not change.
 * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
 */
export function postCustomersCustomerSources(
  customer: string,
  body?: {
    alipay_account?: string;
    bank_account?:
      | {
          account_holder_name?: string;
          account_holder_type?: "company" | "individual";
          account_number: string;
          country: string;
          currency?: string;
          object?: "bank_account";
          routing_number?: string;
        }
      | string;
    card?:
      | {
          address_city?: string;
          address_country?: string;
          address_line1?: string;
          address_line2?: string;
          address_state?: string;
          address_zip?: string;
          cvc?: string;
          exp_month: number;
          exp_year: number;
          metadata?: {
            [key: string]: string;
          };
          name?: string;
          number: string;
          object?: "card";
        }
      | string;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    source?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic3;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/sources`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a specified source for a given customer.</p>
 */
export function deleteCustomersCustomerSourcesId(
  customer: string,
  id: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic3 | Polymorphic4;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/sources/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieve a specified source for a given customer.</p>
 */
export function getCustomersCustomerSourcesId(
  customer: string,
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Polymorphic3;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/sources/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Update a specified source for a given customer.</p>
 */
export function postCustomersCustomerSourcesId(
  customer: string,
  id: string,
  body?: {
    account_holder_name?: string;
    account_holder_type?: "company" | "individual";
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    exp_month?: string;
    exp_year?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
    owner?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      email?: string;
      name?: string;
      phone?: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Card | BankAccount | Source;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/sources/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Verify a specified bank account for a given customer.</p>
 */
export function postCustomersCustomerSourcesIdVerify(
  customer: string,
  id: string,
  body?: {
    amounts?: number[];
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: BankAccount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/sources/${id}/verify`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can see a list of the customer’s active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>
 */
export function getCustomersCustomerSubscriptions(
  customer: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Subscription[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/subscriptions${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new subscription on an existing customer.</p>
 */
export function postCustomersCustomerSubscriptions(
  customer: string,
  body?: {
    add_invoice_items?: {
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    application_fee_percent?: number;
    backdate_start_date?: number;
    billing_cycle_anchor?: number;
    billing_thresholds?:
      | {
          amount_gte?: number;
          reset_billing_cycle_anchor?: boolean;
        }
      | "";
    cancel_at?: number;
    cancel_at_period_end?: boolean;
    collection_method?: "charge_automatically" | "send_invoice";
    coupon?: string;
    days_until_due?: number;
    default_payment_method?: string;
    default_source?: string;
    default_tax_rates?: string[] | "";
    expand?: string[];
    items?: {
      billing_thresholds?:
        | {
            usage_gte: number;
          }
        | "";
      metadata?: {
        [key: string]: string;
      };
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        recurring: {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        };
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    off_session?: boolean;
    payment_behavior?:
      | "allow_incomplete"
      | "error_if_incomplete"
      | "pending_if_incomplete";
    pending_invoice_item_interval?:
      | {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        }
      | "";
    promotion_code?: string;
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
    transfer_data?: {
      amount_percent?: number;
      destination: string;
    };
    trial_end?: "now" | number;
    trial_from_plan?: boolean;
    trial_period_days?: number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Subscription;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/subscriptions`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>
 *
 * <p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>
 *
 * <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
 */
export function deleteCustomersCustomerSubscriptionsSubscriptionExposedId(
  customer: string,
  subscriptionExposedId: string,
  body?: {
    expand?: string[];
    invoice_now?: boolean;
    prorate?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Subscription;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/subscriptions/${subscriptionExposedId}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the subscription with the given ID.</p>
 */
export function getCustomersCustomerSubscriptionsSubscriptionExposedId(
  customer: string,
  subscriptionExposedId: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Subscription;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/subscriptions/${subscriptionExposedId}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>
 */
export function postCustomersCustomerSubscriptionsSubscriptionExposedId(
  customer: string,
  subscriptionExposedId: string,
  body?: {
    add_invoice_items?: {
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    application_fee_percent?: number;
    billing_cycle_anchor?: "now" | "unchanged";
    billing_thresholds?:
      | {
          amount_gte?: number;
          reset_billing_cycle_anchor?: boolean;
        }
      | "";
    cancel_at?: number | "";
    cancel_at_period_end?: boolean;
    collection_method?: "charge_automatically" | "send_invoice";
    coupon?: string;
    days_until_due?: number;
    default_payment_method?: string;
    default_source?: string;
    default_tax_rates?: string[] | "";
    expand?: string[];
    items?: {
      billing_thresholds?:
        | {
            usage_gte: number;
          }
        | "";
      clear_usage?: boolean;
      deleted?: boolean;
      id?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        recurring: {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        };
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    off_session?: boolean;
    pause_collection?:
      | {
          behavior: "keep_as_draft" | "mark_uncollectible" | "void";
          resumes_at?: number;
        }
      | "";
    payment_behavior?:
      | "allow_incomplete"
      | "error_if_incomplete"
      | "pending_if_incomplete";
    pending_invoice_item_interval?:
      | {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        }
      | "";
    promotion_code?: string;
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
    proration_date?: number;
    transfer_data?:
      | {
          amount_percent?: number;
          destination: string;
        }
      | "";
    trial_end?: "now" | number;
    trial_from_plan?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Subscription;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/subscriptions/${subscriptionExposedId}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Removes the currently applied discount on a customer.</p>
 */
export function deleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount(
  customer: string,
  subscriptionExposedId: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedDiscount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/subscriptions/${subscriptionExposedId}/discount`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
export function getCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount(
  customer: string,
  subscriptionExposedId: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Discount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/subscriptions/${subscriptionExposedId}/discount${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of tax IDs for a customer.</p>
 */
export function getCustomersCustomerTaxIds(
  customer: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Tax_id[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/tax_ids${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new <code>TaxID</code> object for a customer.</p>
 */
export function postCustomersCustomerTaxIds(
  customer: string,
  body: {
    expand?: string[];
    type:
      | "ae_trn"
      | "au_abn"
      | "br_cnpj"
      | "br_cpf"
      | "ca_bn"
      | "ca_qst"
      | "ch_vat"
      | "cl_tin"
      | "es_cif"
      | "eu_vat"
      | "hk_br"
      | "id_npwp"
      | "in_gst"
      | "jp_cn"
      | "jp_rn"
      | "kr_brn"
      | "li_uid"
      | "mx_rfc"
      | "my_frp"
      | "my_itn"
      | "my_sst"
      | "no_vat"
      | "nz_gst"
      | "ru_inn"
      | "ru_kpp"
      | "sa_vat"
      | "sg_gst"
      | "sg_uen"
      | "th_vat"
      | "tw_vat"
      | "us_ein"
      | "za_vat";
    value: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Tax_id;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/tax_ids`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes an existing <code>TaxID</code> object.</p>
 */
export function deleteCustomersCustomerTaxIdsId(
  customer: string,
  id: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Deleted_tax_id;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/tax_ids/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the <code>TaxID</code> object with the given identifier.</p>
 */
export function getCustomersCustomerTaxIdsId(
  customer: string,
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Tax_id;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/customers/${customer}/tax_ids/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of your disputes.</p>
 */
export function getDisputes(
  body?: {},
  {
    charge,
    created,
    endingBefore,
    expand,
    limit,
    paymentIntent,
    startingAfter,
  }: {
    charge?: string;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    paymentIntent?: string;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Dispute[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/disputes${QS.query(
      QS.form({
        charge,
        ending_before: endingBefore,
        limit,
        payment_intent: paymentIntent,
        starting_after: startingAfter,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the dispute with the given ID.</p>
 */
export function getDisputesDispute(
  dispute: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Dispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/disputes/${dispute}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>
 *
 * <p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>
 */
export function postDisputesDispute(
  dispute: string,
  body?: {
    evidence?: {
      access_activity_log?: string;
      billing_address?: string;
      cancellation_policy?: string;
      cancellation_policy_disclosure?: string;
      cancellation_rebuttal?: string;
      customer_communication?: string;
      customer_email_address?: string;
      customer_name?: string;
      customer_purchase_ip?: string;
      customer_signature?: string;
      duplicate_charge_documentation?: string;
      duplicate_charge_explanation?: string;
      duplicate_charge_id?: string;
      product_description?: string;
      receipt?: string;
      refund_policy?: string;
      refund_policy_disclosure?: string;
      refund_refusal_explanation?: string;
      service_date?: string;
      service_documentation?: string;
      shipping_address?: string;
      shipping_carrier?: string;
      shipping_date?: string;
      shipping_documentation?: string;
      shipping_tracking_number?: string;
      uncategorized_file?: string;
      uncategorized_text?: string;
    };
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    submit?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Dispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/disputes/${dispute}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>
 *
 * <p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>
 */
export function postDisputesDisputeClose(
  dispute: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Dispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/disputes/${dispute}/close`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Creates a short-lived API key for a given resource.</p>
 */
export function postEphemeralKeys(
  body?: {
    customer?: string;
    expand?: string[];
    issuing_card?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: EphemeralKey;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/ephemeral_keys",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Invalidates a short-lived API key for a given resource.</p>
 */
export function deleteEphemeralKeysKey(
  key: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: EphemeralKey;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/ephemeral_keys/${key}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="/docs/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>
 */
export function getEvents(
  body?: {},
  {
    created,
    deliverySuccess,
    endingBefore,
    expand,
    limit,
    startingAfter,
    type,
    types,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    deliverySuccess?: boolean;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    type?: string;
    types?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: NotificationEvent[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/events${QS.query(
      QS.deep({
        created,
        expand,
        types,
      }),
      QS.form({
        delivery_success: deliverySuccess,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        type,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.</p>
 */
export function getEventsId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: NotificationEvent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/events/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>
 */
export function getExchangeRates(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: ExchangeRate[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/exchange_rates${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the exchange rates from the given currency to every supported currency.</p>
 */
export function getExchangeRatesRateId(
  rateId: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: ExchangeRate;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/exchange_rates/${rateId}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of file links.</p>
 */
export function getFileLinks(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    expired,
    file,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    expired?: boolean;
    file?: string;
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: FileLink[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/file_links${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        expired,
        file,
        limit,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new file link object.</p>
 */
export function postFileLinks(
  body: {
    expand?: string[];
    expires_at?: number;
    file: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: FileLink;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/file_links",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the file link with the given ID.</p>
 */
export function getFileLinksLink(
  link: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: FileLink;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/file_links/${link}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing file link object. Expired links can no longer be updated.</p>
 */
export function postFileLinksLink(
  link: string,
  body?: {
    expand?: string[];
    expires_at?: "now" | number | "";
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: FileLink;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/file_links/${link}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.</p>
 */
export function getFiles(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    purpose,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    purpose?:
      | "additional_verification"
      | "business_icon"
      | "business_logo"
      | "customer_signature"
      | "dispute_evidence"
      | "document_provider_identity_document"
      | "finance_report_run"
      | "identity_document"
      | "pci_document"
      | "sigma_scheduled_query"
      | "tax_document_user_upload";
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: File[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/files${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        purpose,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>To upload a file to Stripe, you’ll need to send a request of type <code>multipart/form-data</code>. The request should contain the file you would like to upload, as well as the parameters for creating a file.</p>
 *
 * <p>All of Stripe’s officially supported Client libraries should have support for sending <code>multipart/form-data</code>.</p>
 */
export function postFiles(
  body: {
    expand?: string[];
    file: string;
    file_link_data?: {
      create: boolean;
      expires_at?: number;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
    };
    purpose:
      | "additional_verification"
      | "business_icon"
      | "business_logo"
      | "customer_signature"
      | "dispute_evidence"
      | "identity_document"
      | "pci_document"
      | "tax_document_user_upload";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: File;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/files",
    oazapfts.multipart({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object. To access file contents, see the <a href="/docs/file-upload#download-file-contents">File Upload Guide</a>.</p>
 */
export function getFilesFile(
  file: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: File;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/files/${file}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>
 */
export function getInvoiceitems(
  body?: {},
  {
    created,
    customer,
    endingBefore,
    expand,
    invoice,
    limit,
    pending,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    invoice?: string;
    limit?: number;
    pending?: boolean;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: InvoiceItem[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoiceitems${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        customer,
        ending_before: endingBefore,
        invoice,
        limit,
        pending,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>
 */
export function postInvoiceitems(
  body: {
    amount?: number;
    currency?: string;
    customer: string;
    description?: string;
    discountable?: boolean;
    discounts?:
      | {
          coupon?: string;
          discount?: string;
        }[]
      | "";
    expand?: string[];
    invoice?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    period?: {
      end: number;
      start: number;
    };
    price?: string;
    price_data?: {
      currency: string;
      product: string;
      unit_amount?: number;
      unit_amount_decimal?: string;
    };
    quantity?: number;
    subscription?: string;
    tax_rates?: string[];
    unit_amount?: number;
    unit_amount_decimal?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: InvoiceItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/invoiceitems",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they’re not attached to invoices, or if it’s attached to a draft invoice.</p>
 */
export function deleteInvoiceitemsInvoiceitem(
  invoiceitem: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedInvoiceItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoiceitems/${invoiceitem}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the invoice item with the given ID.</p>
 */
export function getInvoiceitemsInvoiceitem(
  invoiceitem: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: InvoiceItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoiceitems/${invoiceitem}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>
 */
export function postInvoiceitemsInvoiceitem(
  invoiceitem: string,
  body?: {
    amount?: number;
    description?: string;
    discountable?: boolean;
    discounts?:
      | {
          coupon?: string;
          discount?: string;
        }[]
      | "";
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    period?: {
      end: number;
      start: number;
    };
    price?: string;
    price_data?: {
      currency: string;
      product: string;
      unit_amount?: number;
      unit_amount_decimal?: string;
    };
    quantity?: number;
    tax_rates?: string[] | "";
    unit_amount?: number;
    unit_amount_decimal?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: InvoiceItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoiceitems/${invoiceitem}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>
 */
export function getInvoices(
  body?: {},
  {
    collectionMethod,
    created,
    customer,
    dueDate,
    endingBefore,
    expand,
    limit,
    startingAfter,
    status,
    subscription,
  }: {
    collectionMethod?: "charge_automatically" | "send_invoice";
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    dueDate?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    status?: "draft" | "open" | "paid" | "uncollectible" | "void";
    subscription?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Invoice[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices${QS.query(
      QS.form({
        collection_method: collectionMethod,
        customer,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        status,
        subscription,
      }),
      QS.deep({
        created,
        due_date: dueDate,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>This endpoint creates a draft invoice for a given customer. The draft invoice created pulls in all pending invoice items on that customer, including prorations. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p>
 */
export function postInvoices(
  body: {
    account_tax_ids?: string[] | "";
    application_fee_amount?: number;
    auto_advance?: boolean;
    collection_method?: "charge_automatically" | "send_invoice";
    custom_fields?:
      | {
          name: string;
          value: string;
        }[]
      | "";
    customer: string;
    days_until_due?: number;
    default_payment_method?: string;
    default_source?: string;
    default_tax_rates?: string[];
    description?: string;
    discounts?:
      | {
          coupon?: string;
          discount?: string;
        }[]
      | "";
    due_date?: number;
    expand?: string[];
    footer?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    statement_descriptor?: string;
    subscription?: string;
    transfer_data?: {
      amount?: number;
      destination: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/invoices",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>
 *
 * <p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>
 *
 * <p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass a <code>proration_date</code> parameter when doing the actual subscription update. The value passed in should be the same as the <code>subscription_proration_date</code> returned on the upcoming invoice resource. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_proration_date</code> on the upcoming invoice resource.</p>
 */
export function getInvoicesUpcoming(
  body?: {},
  {
    coupon,
    customer,
    discounts,
    expand,
    invoiceItems,
    schedule,
    subscription,
    subscriptionBillingCycleAnchor,
    subscriptionCancelAt,
    subscriptionCancelAtPeriodEnd,
    subscriptionCancelNow,
    subscriptionDefaultTaxRates,
    subscriptionItems,
    subscriptionProrationBehavior,
    subscriptionProrationDate,
    subscriptionStartDate,
    subscriptionTrialEnd,
    subscriptionTrialFromPlan,
  }: {
    coupon?: string;
    customer?: string;
    discounts?:
      | {
          coupon?: string;
          discount?: string;
        }[]
      | "";
    expand?: string[];
    invoiceItems?: {
      amount?: number;
      currency?: string;
      description?: string;
      discountable?: boolean;
      discounts?:
        | {
            coupon?: string;
            discount?: string;
          }[]
        | "";
      invoiceitem?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      period?: {
        end: number;
        start: number;
      };
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
      unit_amount?: number;
      unit_amount_decimal?: string;
    }[];
    schedule?: string;
    subscription?: string;
    subscriptionBillingCycleAnchor?: ("now" | "unchanged") | number;
    subscriptionCancelAt?: number | "";
    subscriptionCancelAtPeriodEnd?: boolean;
    subscriptionCancelNow?: boolean;
    subscriptionDefaultTaxRates?: string[] | "";
    subscriptionItems?: {
      billing_thresholds?:
        | {
            usage_gte: number;
          }
        | "";
      clear_usage?: boolean;
      deleted?: boolean;
      id?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        recurring: {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        };
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    subscriptionProrationBehavior?:
      | "always_invoice"
      | "create_prorations"
      | "none";
    subscriptionProrationDate?: number;
    subscriptionStartDate?: number;
    subscriptionTrialEnd?: "now" | number;
    subscriptionTrialFromPlan?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/upcoming${QS.query(
      QS.form({
        coupon,
        customer,
        schedule,
        subscription,
        subscription_cancel_at_period_end: subscriptionCancelAtPeriodEnd,
        subscription_cancel_now: subscriptionCancelNow,
        subscription_proration_behavior: subscriptionProrationBehavior,
        subscription_proration_date: subscriptionProrationDate,
        subscription_start_date: subscriptionStartDate,
        subscription_trial_from_plan: subscriptionTrialFromPlan,
      }),
      QS.deep({
        discounts,
        expand,
        invoice_items: invoiceItems,
        subscription_billing_cycle_anchor: subscriptionBillingCycleAnchor,
        subscription_cancel_at: subscriptionCancelAt,
        subscription_default_tax_rates: subscriptionDefaultTaxRates,
        subscription_items: subscriptionItems,
        subscription_trial_end: subscriptionTrialEnd,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When retrieving an upcoming invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
 */
export function getInvoicesUpcomingLines(
  body?: {},
  {
    coupon,
    customer,
    discounts,
    endingBefore,
    expand,
    invoiceItems,
    limit,
    schedule,
    startingAfter,
    subscription,
    subscriptionBillingCycleAnchor,
    subscriptionCancelAt,
    subscriptionCancelAtPeriodEnd,
    subscriptionCancelNow,
    subscriptionDefaultTaxRates,
    subscriptionItems,
    subscriptionProrationBehavior,
    subscriptionProrationDate,
    subscriptionStartDate,
    subscriptionTrialEnd,
    subscriptionTrialFromPlan,
  }: {
    coupon?: string;
    customer?: string;
    discounts?:
      | {
          coupon?: string;
          discount?: string;
        }[]
      | "";
    endingBefore?: string;
    expand?: string[];
    invoiceItems?: {
      amount?: number;
      currency?: string;
      description?: string;
      discountable?: boolean;
      discounts?:
        | {
            coupon?: string;
            discount?: string;
          }[]
        | "";
      invoiceitem?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      period?: {
        end: number;
        start: number;
      };
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
      unit_amount?: number;
      unit_amount_decimal?: string;
    }[];
    limit?: number;
    schedule?: string;
    startingAfter?: string;
    subscription?: string;
    subscriptionBillingCycleAnchor?: ("now" | "unchanged") | number;
    subscriptionCancelAt?: number | "";
    subscriptionCancelAtPeriodEnd?: boolean;
    subscriptionCancelNow?: boolean;
    subscriptionDefaultTaxRates?: string[] | "";
    subscriptionItems?: {
      billing_thresholds?:
        | {
            usage_gte: number;
          }
        | "";
      clear_usage?: boolean;
      deleted?: boolean;
      id?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        recurring: {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        };
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    subscriptionProrationBehavior?:
      | "always_invoice"
      | "create_prorations"
      | "none";
    subscriptionProrationDate?: number;
    subscriptionStartDate?: number;
    subscriptionTrialEnd?: "now" | number;
    subscriptionTrialFromPlan?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: InvoiceLineItem[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/upcoming/lines${QS.query(
      QS.form({
        coupon,
        customer,
        ending_before: endingBefore,
        limit,
        schedule,
        starting_after: startingAfter,
        subscription,
        subscription_cancel_at_period_end: subscriptionCancelAtPeriodEnd,
        subscription_cancel_now: subscriptionCancelNow,
        subscription_proration_behavior: subscriptionProrationBehavior,
        subscription_proration_date: subscriptionProrationDate,
        subscription_start_date: subscriptionStartDate,
        subscription_trial_from_plan: subscriptionTrialFromPlan,
      }),
      QS.deep({
        discounts,
        expand,
        invoice_items: invoiceItems,
        subscription_billing_cycle_anchor: subscriptionBillingCycleAnchor,
        subscription_cancel_at: subscriptionCancelAt,
        subscription_default_tax_rates: subscriptionDefaultTaxRates,
        subscription_items: subscriptionItems,
        subscription_trial_end: subscriptionTrialEnd,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p>
 */
export function deleteInvoicesInvoice(
  invoice: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedInvoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the invoice with the given ID.</p>
 */
export function getInvoicesInvoice(
  invoice: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
 * monetary values, as well as <code>collection_method</code>, become uneditable.</p>
 *
 * <p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
 * sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
 * <code>auto_advance=false</code>.</p>
 */
export function postInvoicesInvoice(
  invoice: string,
  body?: {
    account_tax_ids?: string[] | "";
    application_fee_amount?: number;
    auto_advance?: boolean;
    collection_method?: "charge_automatically" | "send_invoice";
    custom_fields?:
      | {
          name: string;
          value: string;
        }[]
      | "";
    days_until_due?: number;
    default_payment_method?: string;
    default_source?: string;
    default_tax_rates?: string[] | "";
    description?: string;
    discounts?:
      | {
          coupon?: string;
          discount?: string;
        }[]
      | "";
    due_date?: number;
    expand?: string[];
    footer?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    statement_descriptor?: string;
    transfer_data?:
      | {
          amount?: number;
          destination: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you’d like to finalize a draft invoice manually, you can do so using this method.</p>
 */
export function postInvoicesInvoiceFinalize(
  invoice: string,
  body?: {
    auto_advance?: boolean;
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}/finalize`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
 */
export function getInvoicesInvoiceLines(
  invoice: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: InvoiceLineItem[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}/lines${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>
 */
export function postInvoicesInvoiceMarkUncollectible(
  invoice: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}/mark_uncollectible`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>
 */
export function postInvoicesInvoicePay(
  invoice: string,
  body?: {
    expand?: string[];
    forgive?: boolean;
    off_session?: boolean;
    paid_out_of_band?: boolean;
    payment_method?: string;
    source?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}/pay`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>
 *
 * <p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>
 */
export function postInvoicesInvoiceSend(
  invoice: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}/send`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>
 */
export function postInvoicesInvoiceVoid(
  invoice: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Invoice;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/invoices/${invoice}/void`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of issuer fraud records.</p>
 */
export function getIssuerFraudRecords(
  body?: {},
  {
    charge,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    charge?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: IssuerFraudRecord[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuer_fraud_records${QS.query(
      QS.form({
        charge,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an issuer fraud record that has previously been created. </p>
 *
 * <p>Please refer to the <a href="#issuer_fraud_record_object">issuer fraud record</a> object reference for more details.</p>
 */
export function getIssuerFraudRecordsIssuerFraudRecord(
  issuerFraudRecord: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuerFraudRecord;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuer_fraud_records/${issuerFraudRecord}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getIssuingAuthorizations(
  body?: {},
  {
    card,
    cardholder,
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
    status,
  }: {
    card?: string;
    cardholder?: string;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    status?: "closed" | "pending" | "reversed";
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: IssuingAuthorization[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/authorizations${QS.query(
      QS.form({
        card,
        cardholder,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        status,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves an Issuing <code>Authorization</code> object.</p>
 */
export function getIssuingAuthorizationsAuthorization(
  authorization: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingAuthorization;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/authorizations/${authorization}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postIssuingAuthorizationsAuthorization(
  authorization: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingAuthorization;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/authorizations/${authorization}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow.</p>
 */
export function postIssuingAuthorizationsAuthorizationApprove(
  authorization: string,
  body?: {
    amount?: number;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingAuthorization;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/authorizations/${authorization}/approve`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.</p>
 */
export function postIssuingAuthorizationsAuthorizationDecline(
  authorization: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingAuthorization;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/authorizations/${authorization}/decline`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getIssuingCardholders(
  body?: {},
  {
    created,
    email,
    endingBefore,
    expand,
    limit,
    phoneNumber,
    startingAfter,
    status,
    type,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    email?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    phoneNumber?: string;
    startingAfter?: string;
    status?: "active" | "blocked" | "inactive";
    type?: "company" | "individual";
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: IssuingCardholder[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/cardholders${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        email,
        ending_before: endingBefore,
        limit,
        phone_number: phoneNumber,
        starting_after: startingAfter,
        status,
        type,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p>
 */
export function postIssuingCardholders(
  body: {
    billing: {
      address: {
        city: string;
        country: string;
        line1: string;
        line2?: string;
        postal_code: string;
        state?: string;
      };
    };
    company?: {
      tax_id?: string;
    };
    email?: string;
    expand?: string[];
    individual?: {
      dob?: {
        day: number;
        month: number;
        year: number;
      };
      first_name: string;
      last_name: string;
      verification?: {
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    metadata?: {
      [key: string]: string;
    };
    name: string;
    phone_number?: string;
    spending_controls?: {
      allowed_categories?: (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[];
      blocked_categories?: (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[];
      spending_limits?: {
        amount: number;
        categories?: (
          | "ac_refrigeration_repair"
          | "accounting_bookkeeping_services"
          | "advertising_services"
          | "agricultural_cooperative"
          | "airlines_air_carriers"
          | "airports_flying_fields"
          | "ambulance_services"
          | "amusement_parks_carnivals"
          | "antique_reproductions"
          | "antique_shops"
          | "aquariums"
          | "architectural_surveying_services"
          | "art_dealers_and_galleries"
          | "artists_supply_and_craft_shops"
          | "auto_and_home_supply_stores"
          | "auto_body_repair_shops"
          | "auto_paint_shops"
          | "auto_service_shops"
          | "automated_cash_disburse"
          | "automated_fuel_dispensers"
          | "automobile_associations"
          | "automotive_parts_and_accessories_stores"
          | "automotive_tire_stores"
          | "bail_and_bond_payments"
          | "bakeries"
          | "bands_orchestras"
          | "barber_and_beauty_shops"
          | "betting_casino_gambling"
          | "bicycle_shops"
          | "billiard_pool_establishments"
          | "boat_dealers"
          | "boat_rentals_and_leases"
          | "book_stores"
          | "books_periodicals_and_newspapers"
          | "bowling_alleys"
          | "bus_lines"
          | "business_secretarial_schools"
          | "buying_shopping_services"
          | "cable_satellite_and_other_pay_television_and_radio"
          | "camera_and_photographic_supply_stores"
          | "candy_nut_and_confectionery_stores"
          | "car_and_truck_dealers_new_used"
          | "car_and_truck_dealers_used_only"
          | "car_rental_agencies"
          | "car_washes"
          | "carpentry_services"
          | "carpet_upholstery_cleaning"
          | "caterers"
          | "charitable_and_social_service_organizations_fundraising"
          | "chemicals_and_allied_products"
          | "child_care_services"
          | "childrens_and_infants_wear_stores"
          | "chiropodists_podiatrists"
          | "chiropractors"
          | "cigar_stores_and_stands"
          | "civic_social_fraternal_associations"
          | "cleaning_and_maintenance"
          | "clothing_rental"
          | "colleges_universities"
          | "commercial_equipment"
          | "commercial_footwear"
          | "commercial_photography_art_and_graphics"
          | "commuter_transport_and_ferries"
          | "computer_network_services"
          | "computer_programming"
          | "computer_repair"
          | "computer_software_stores"
          | "computers_peripherals_and_software"
          | "concrete_work_services"
          | "construction_materials"
          | "consulting_public_relations"
          | "correspondence_schools"
          | "cosmetic_stores"
          | "counseling_services"
          | "country_clubs"
          | "courier_services"
          | "court_costs"
          | "credit_reporting_agencies"
          | "cruise_lines"
          | "dairy_products_stores"
          | "dance_hall_studios_schools"
          | "dating_escort_services"
          | "dentists_orthodontists"
          | "department_stores"
          | "detective_agencies"
          | "digital_goods_applications"
          | "digital_goods_games"
          | "digital_goods_large_volume"
          | "digital_goods_media"
          | "direct_marketing_catalog_merchant"
          | "direct_marketing_combination_catalog_and_retail_merchant"
          | "direct_marketing_inbound_telemarketing"
          | "direct_marketing_insurance_services"
          | "direct_marketing_other"
          | "direct_marketing_outbound_telemarketing"
          | "direct_marketing_subscription"
          | "direct_marketing_travel"
          | "discount_stores"
          | "doctors"
          | "door_to_door_sales"
          | "drapery_window_covering_and_upholstery_stores"
          | "drinking_places"
          | "drug_stores_and_pharmacies"
          | "drugs_drug_proprietaries_and_druggist_sundries"
          | "dry_cleaners"
          | "durable_goods"
          | "duty_free_stores"
          | "eating_places_restaurants"
          | "educational_services"
          | "electric_razor_stores"
          | "electrical_parts_and_equipment"
          | "electrical_services"
          | "electronics_repair_shops"
          | "electronics_stores"
          | "elementary_secondary_schools"
          | "employment_temp_agencies"
          | "equipment_rental"
          | "exterminating_services"
          | "family_clothing_stores"
          | "fast_food_restaurants"
          | "financial_institutions"
          | "fines_government_administrative_entities"
          | "fireplace_fireplace_screens_and_accessories_stores"
          | "floor_covering_stores"
          | "florists"
          | "florists_supplies_nursery_stock_and_flowers"
          | "freezer_and_locker_meat_provisioners"
          | "fuel_dealers_non_automotive"
          | "funeral_services_crematories"
          | "furniture_home_furnishings_and_equipment_stores_except_appliances"
          | "furniture_repair_refinishing"
          | "furriers_and_fur_shops"
          | "general_services"
          | "gift_card_novelty_and_souvenir_shops"
          | "glass_paint_and_wallpaper_stores"
          | "glassware_crystal_stores"
          | "golf_courses_public"
          | "government_services"
          | "grocery_stores_supermarkets"
          | "hardware_equipment_and_supplies"
          | "hardware_stores"
          | "health_and_beauty_spas"
          | "hearing_aids_sales_and_supplies"
          | "heating_plumbing_a_c"
          | "hobby_toy_and_game_shops"
          | "home_supply_warehouse_stores"
          | "hospitals"
          | "hotels_motels_and_resorts"
          | "household_appliance_stores"
          | "industrial_supplies"
          | "information_retrieval_services"
          | "insurance_default"
          | "insurance_underwriting_premiums"
          | "intra_company_purchases"
          | "jewelry_stores_watches_clocks_and_silverware_stores"
          | "landscaping_services"
          | "laundries"
          | "laundry_cleaning_services"
          | "legal_services_attorneys"
          | "luggage_and_leather_goods_stores"
          | "lumber_building_materials_stores"
          | "manual_cash_disburse"
          | "marinas_service_and_supplies"
          | "masonry_stonework_and_plaster"
          | "massage_parlors"
          | "medical_and_dental_labs"
          | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
          | "medical_services"
          | "membership_organizations"
          | "mens_and_boys_clothing_and_accessories_stores"
          | "mens_womens_clothing_stores"
          | "metal_service_centers"
          | "miscellaneous"
          | "miscellaneous_apparel_and_accessory_shops"
          | "miscellaneous_auto_dealers"
          | "miscellaneous_business_services"
          | "miscellaneous_food_stores"
          | "miscellaneous_general_merchandise"
          | "miscellaneous_general_services"
          | "miscellaneous_home_furnishing_specialty_stores"
          | "miscellaneous_publishing_and_printing"
          | "miscellaneous_recreation_services"
          | "miscellaneous_repair_shops"
          | "miscellaneous_specialty_retail"
          | "mobile_home_dealers"
          | "motion_picture_theaters"
          | "motor_freight_carriers_and_trucking"
          | "motor_homes_dealers"
          | "motor_vehicle_supplies_and_new_parts"
          | "motorcycle_shops_and_dealers"
          | "motorcycle_shops_dealers"
          | "music_stores_musical_instruments_pianos_and_sheet_music"
          | "news_dealers_and_newsstands"
          | "non_fi_money_orders"
          | "non_fi_stored_value_card_purchase_load"
          | "nondurable_goods"
          | "nurseries_lawn_and_garden_supply_stores"
          | "nursing_personal_care"
          | "office_and_commercial_furniture"
          | "opticians_eyeglasses"
          | "optometrists_ophthalmologist"
          | "orthopedic_goods_prosthetic_devices"
          | "osteopaths"
          | "package_stores_beer_wine_and_liquor"
          | "paints_varnishes_and_supplies"
          | "parking_lots_garages"
          | "passenger_railways"
          | "pawn_shops"
          | "pet_shops_pet_food_and_supplies"
          | "petroleum_and_petroleum_products"
          | "photo_developing"
          | "photographic_photocopy_microfilm_equipment_and_supplies"
          | "photographic_studios"
          | "picture_video_production"
          | "piece_goods_notions_and_other_dry_goods"
          | "plumbing_heating_equipment_and_supplies"
          | "political_organizations"
          | "postal_services_government_only"
          | "precious_stones_and_metals_watches_and_jewelry"
          | "professional_services"
          | "public_warehousing_and_storage"
          | "quick_copy_repro_and_blueprint"
          | "railroads"
          | "real_estate_agents_and_managers_rentals"
          | "record_stores"
          | "recreational_vehicle_rentals"
          | "religious_goods_stores"
          | "religious_organizations"
          | "roofing_siding_sheet_metal"
          | "secretarial_support_services"
          | "security_brokers_dealers"
          | "service_stations"
          | "sewing_needlework_fabric_and_piece_goods_stores"
          | "shoe_repair_hat_cleaning"
          | "shoe_stores"
          | "small_appliance_repair"
          | "snowmobile_dealers"
          | "special_trade_services"
          | "specialty_cleaning"
          | "sporting_goods_stores"
          | "sporting_recreation_camps"
          | "sports_and_riding_apparel_stores"
          | "sports_clubs_fields"
          | "stamp_and_coin_stores"
          | "stationary_office_supplies_printing_and_writing_paper"
          | "stationery_stores_office_and_school_supply_stores"
          | "swimming_pools_sales"
          | "t_ui_travel_germany"
          | "tailors_alterations"
          | "tax_payments_government_agencies"
          | "tax_preparation_services"
          | "taxicabs_limousines"
          | "telecommunication_equipment_and_telephone_sales"
          | "telecommunication_services"
          | "telegraph_services"
          | "tent_and_awning_shops"
          | "testing_laboratories"
          | "theatrical_ticket_agencies"
          | "timeshares"
          | "tire_retreading_and_repair"
          | "tolls_bridge_fees"
          | "tourist_attractions_and_exhibits"
          | "towing_services"
          | "trailer_parks_campgrounds"
          | "transportation_services"
          | "travel_agencies_tour_operators"
          | "truck_stop_iteration"
          | "truck_utility_trailer_rentals"
          | "typesetting_plate_making_and_related_services"
          | "typewriter_stores"
          | "u_s_federal_government_agencies_or_departments"
          | "uniforms_commercial_clothing"
          | "used_merchandise_and_secondhand_stores"
          | "utilities"
          | "variety_stores"
          | "veterinary_services"
          | "video_amusement_game_supplies"
          | "video_game_arcades"
          | "video_tape_rental_stores"
          | "vocational_trade_schools"
          | "watch_jewelry_repair"
          | "welding_repair"
          | "wholesale_clubs"
          | "wig_and_toupee_stores"
          | "wires_money_orders"
          | "womens_accessory_and_specialty_shops"
          | "womens_ready_to_wear_stores"
          | "wrecking_and_salvage_yards"
        )[];
        interval:
          | "all_time"
          | "daily"
          | "monthly"
          | "per_authorization"
          | "weekly"
          | "yearly";
      }[];
      spending_limits_currency?: string;
    };
    status?: "active" | "inactive";
    type: "company" | "individual";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingCardholder;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/issuing/cardholders",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves an Issuing <code>Cardholder</code> object.</p>
 */
export function getIssuingCardholdersCardholder(
  cardholder: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingCardholder;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/cardholders/${cardholder}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postIssuingCardholdersCardholder(
  cardholder: string,
  body?: {
    billing?: {
      address: {
        city: string;
        country: string;
        line1: string;
        line2?: string;
        postal_code: string;
        state?: string;
      };
    };
    company?: {
      tax_id?: string;
    };
    email?: string;
    expand?: string[];
    individual?: {
      dob?: {
        day: number;
        month: number;
        year: number;
      };
      first_name: string;
      last_name: string;
      verification?: {
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    metadata?: {
      [key: string]: string;
    };
    phone_number?: string;
    spending_controls?: {
      allowed_categories?: (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[];
      blocked_categories?: (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[];
      spending_limits?: {
        amount: number;
        categories?: (
          | "ac_refrigeration_repair"
          | "accounting_bookkeeping_services"
          | "advertising_services"
          | "agricultural_cooperative"
          | "airlines_air_carriers"
          | "airports_flying_fields"
          | "ambulance_services"
          | "amusement_parks_carnivals"
          | "antique_reproductions"
          | "antique_shops"
          | "aquariums"
          | "architectural_surveying_services"
          | "art_dealers_and_galleries"
          | "artists_supply_and_craft_shops"
          | "auto_and_home_supply_stores"
          | "auto_body_repair_shops"
          | "auto_paint_shops"
          | "auto_service_shops"
          | "automated_cash_disburse"
          | "automated_fuel_dispensers"
          | "automobile_associations"
          | "automotive_parts_and_accessories_stores"
          | "automotive_tire_stores"
          | "bail_and_bond_payments"
          | "bakeries"
          | "bands_orchestras"
          | "barber_and_beauty_shops"
          | "betting_casino_gambling"
          | "bicycle_shops"
          | "billiard_pool_establishments"
          | "boat_dealers"
          | "boat_rentals_and_leases"
          | "book_stores"
          | "books_periodicals_and_newspapers"
          | "bowling_alleys"
          | "bus_lines"
          | "business_secretarial_schools"
          | "buying_shopping_services"
          | "cable_satellite_and_other_pay_television_and_radio"
          | "camera_and_photographic_supply_stores"
          | "candy_nut_and_confectionery_stores"
          | "car_and_truck_dealers_new_used"
          | "car_and_truck_dealers_used_only"
          | "car_rental_agencies"
          | "car_washes"
          | "carpentry_services"
          | "carpet_upholstery_cleaning"
          | "caterers"
          | "charitable_and_social_service_organizations_fundraising"
          | "chemicals_and_allied_products"
          | "child_care_services"
          | "childrens_and_infants_wear_stores"
          | "chiropodists_podiatrists"
          | "chiropractors"
          | "cigar_stores_and_stands"
          | "civic_social_fraternal_associations"
          | "cleaning_and_maintenance"
          | "clothing_rental"
          | "colleges_universities"
          | "commercial_equipment"
          | "commercial_footwear"
          | "commercial_photography_art_and_graphics"
          | "commuter_transport_and_ferries"
          | "computer_network_services"
          | "computer_programming"
          | "computer_repair"
          | "computer_software_stores"
          | "computers_peripherals_and_software"
          | "concrete_work_services"
          | "construction_materials"
          | "consulting_public_relations"
          | "correspondence_schools"
          | "cosmetic_stores"
          | "counseling_services"
          | "country_clubs"
          | "courier_services"
          | "court_costs"
          | "credit_reporting_agencies"
          | "cruise_lines"
          | "dairy_products_stores"
          | "dance_hall_studios_schools"
          | "dating_escort_services"
          | "dentists_orthodontists"
          | "department_stores"
          | "detective_agencies"
          | "digital_goods_applications"
          | "digital_goods_games"
          | "digital_goods_large_volume"
          | "digital_goods_media"
          | "direct_marketing_catalog_merchant"
          | "direct_marketing_combination_catalog_and_retail_merchant"
          | "direct_marketing_inbound_telemarketing"
          | "direct_marketing_insurance_services"
          | "direct_marketing_other"
          | "direct_marketing_outbound_telemarketing"
          | "direct_marketing_subscription"
          | "direct_marketing_travel"
          | "discount_stores"
          | "doctors"
          | "door_to_door_sales"
          | "drapery_window_covering_and_upholstery_stores"
          | "drinking_places"
          | "drug_stores_and_pharmacies"
          | "drugs_drug_proprietaries_and_druggist_sundries"
          | "dry_cleaners"
          | "durable_goods"
          | "duty_free_stores"
          | "eating_places_restaurants"
          | "educational_services"
          | "electric_razor_stores"
          | "electrical_parts_and_equipment"
          | "electrical_services"
          | "electronics_repair_shops"
          | "electronics_stores"
          | "elementary_secondary_schools"
          | "employment_temp_agencies"
          | "equipment_rental"
          | "exterminating_services"
          | "family_clothing_stores"
          | "fast_food_restaurants"
          | "financial_institutions"
          | "fines_government_administrative_entities"
          | "fireplace_fireplace_screens_and_accessories_stores"
          | "floor_covering_stores"
          | "florists"
          | "florists_supplies_nursery_stock_and_flowers"
          | "freezer_and_locker_meat_provisioners"
          | "fuel_dealers_non_automotive"
          | "funeral_services_crematories"
          | "furniture_home_furnishings_and_equipment_stores_except_appliances"
          | "furniture_repair_refinishing"
          | "furriers_and_fur_shops"
          | "general_services"
          | "gift_card_novelty_and_souvenir_shops"
          | "glass_paint_and_wallpaper_stores"
          | "glassware_crystal_stores"
          | "golf_courses_public"
          | "government_services"
          | "grocery_stores_supermarkets"
          | "hardware_equipment_and_supplies"
          | "hardware_stores"
          | "health_and_beauty_spas"
          | "hearing_aids_sales_and_supplies"
          | "heating_plumbing_a_c"
          | "hobby_toy_and_game_shops"
          | "home_supply_warehouse_stores"
          | "hospitals"
          | "hotels_motels_and_resorts"
          | "household_appliance_stores"
          | "industrial_supplies"
          | "information_retrieval_services"
          | "insurance_default"
          | "insurance_underwriting_premiums"
          | "intra_company_purchases"
          | "jewelry_stores_watches_clocks_and_silverware_stores"
          | "landscaping_services"
          | "laundries"
          | "laundry_cleaning_services"
          | "legal_services_attorneys"
          | "luggage_and_leather_goods_stores"
          | "lumber_building_materials_stores"
          | "manual_cash_disburse"
          | "marinas_service_and_supplies"
          | "masonry_stonework_and_plaster"
          | "massage_parlors"
          | "medical_and_dental_labs"
          | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
          | "medical_services"
          | "membership_organizations"
          | "mens_and_boys_clothing_and_accessories_stores"
          | "mens_womens_clothing_stores"
          | "metal_service_centers"
          | "miscellaneous"
          | "miscellaneous_apparel_and_accessory_shops"
          | "miscellaneous_auto_dealers"
          | "miscellaneous_business_services"
          | "miscellaneous_food_stores"
          | "miscellaneous_general_merchandise"
          | "miscellaneous_general_services"
          | "miscellaneous_home_furnishing_specialty_stores"
          | "miscellaneous_publishing_and_printing"
          | "miscellaneous_recreation_services"
          | "miscellaneous_repair_shops"
          | "miscellaneous_specialty_retail"
          | "mobile_home_dealers"
          | "motion_picture_theaters"
          | "motor_freight_carriers_and_trucking"
          | "motor_homes_dealers"
          | "motor_vehicle_supplies_and_new_parts"
          | "motorcycle_shops_and_dealers"
          | "motorcycle_shops_dealers"
          | "music_stores_musical_instruments_pianos_and_sheet_music"
          | "news_dealers_and_newsstands"
          | "non_fi_money_orders"
          | "non_fi_stored_value_card_purchase_load"
          | "nondurable_goods"
          | "nurseries_lawn_and_garden_supply_stores"
          | "nursing_personal_care"
          | "office_and_commercial_furniture"
          | "opticians_eyeglasses"
          | "optometrists_ophthalmologist"
          | "orthopedic_goods_prosthetic_devices"
          | "osteopaths"
          | "package_stores_beer_wine_and_liquor"
          | "paints_varnishes_and_supplies"
          | "parking_lots_garages"
          | "passenger_railways"
          | "pawn_shops"
          | "pet_shops_pet_food_and_supplies"
          | "petroleum_and_petroleum_products"
          | "photo_developing"
          | "photographic_photocopy_microfilm_equipment_and_supplies"
          | "photographic_studios"
          | "picture_video_production"
          | "piece_goods_notions_and_other_dry_goods"
          | "plumbing_heating_equipment_and_supplies"
          | "political_organizations"
          | "postal_services_government_only"
          | "precious_stones_and_metals_watches_and_jewelry"
          | "professional_services"
          | "public_warehousing_and_storage"
          | "quick_copy_repro_and_blueprint"
          | "railroads"
          | "real_estate_agents_and_managers_rentals"
          | "record_stores"
          | "recreational_vehicle_rentals"
          | "religious_goods_stores"
          | "religious_organizations"
          | "roofing_siding_sheet_metal"
          | "secretarial_support_services"
          | "security_brokers_dealers"
          | "service_stations"
          | "sewing_needlework_fabric_and_piece_goods_stores"
          | "shoe_repair_hat_cleaning"
          | "shoe_stores"
          | "small_appliance_repair"
          | "snowmobile_dealers"
          | "special_trade_services"
          | "specialty_cleaning"
          | "sporting_goods_stores"
          | "sporting_recreation_camps"
          | "sports_and_riding_apparel_stores"
          | "sports_clubs_fields"
          | "stamp_and_coin_stores"
          | "stationary_office_supplies_printing_and_writing_paper"
          | "stationery_stores_office_and_school_supply_stores"
          | "swimming_pools_sales"
          | "t_ui_travel_germany"
          | "tailors_alterations"
          | "tax_payments_government_agencies"
          | "tax_preparation_services"
          | "taxicabs_limousines"
          | "telecommunication_equipment_and_telephone_sales"
          | "telecommunication_services"
          | "telegraph_services"
          | "tent_and_awning_shops"
          | "testing_laboratories"
          | "theatrical_ticket_agencies"
          | "timeshares"
          | "tire_retreading_and_repair"
          | "tolls_bridge_fees"
          | "tourist_attractions_and_exhibits"
          | "towing_services"
          | "trailer_parks_campgrounds"
          | "transportation_services"
          | "travel_agencies_tour_operators"
          | "truck_stop_iteration"
          | "truck_utility_trailer_rentals"
          | "typesetting_plate_making_and_related_services"
          | "typewriter_stores"
          | "u_s_federal_government_agencies_or_departments"
          | "uniforms_commercial_clothing"
          | "used_merchandise_and_secondhand_stores"
          | "utilities"
          | "variety_stores"
          | "veterinary_services"
          | "video_amusement_game_supplies"
          | "video_game_arcades"
          | "video_tape_rental_stores"
          | "vocational_trade_schools"
          | "watch_jewelry_repair"
          | "welding_repair"
          | "wholesale_clubs"
          | "wig_and_toupee_stores"
          | "wires_money_orders"
          | "womens_accessory_and_specialty_shops"
          | "womens_ready_to_wear_stores"
          | "wrecking_and_salvage_yards"
        )[];
        interval:
          | "all_time"
          | "daily"
          | "monthly"
          | "per_authorization"
          | "weekly"
          | "yearly";
      }[];
      spending_limits_currency?: string;
    };
    status?: "active" | "inactive";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingCardholder;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/cardholders/${cardholder}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getIssuingCards(
  body?: {},
  {
    cardholder,
    created,
    endingBefore,
    expMonth,
    expYear,
    expand,
    last4,
    limit,
    startingAfter,
    status,
    type,
  }: {
    cardholder?: string;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expMonth?: number;
    expYear?: number;
    expand?: string[];
    last4?: string;
    limit?: number;
    startingAfter?: string;
    status?: "active" | "canceled" | "inactive";
    type?: "physical" | "virtual";
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: IssuingCard[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/cards${QS.query(
      QS.form({
        cardholder,
        ending_before: endingBefore,
        exp_month: expMonth,
        exp_year: expYear,
        last4,
        limit,
        starting_after: startingAfter,
        status,
        type,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates an Issuing <code>Card</code> object.</p>
 */
export function postIssuingCards(
  body: {
    cardholder?: string;
    currency: string;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    replacement_for?: string;
    replacement_reason?: "damaged" | "expired" | "lost" | "stolen";
    shipping?: {
      address: {
        city: string;
        country: string;
        line1: string;
        line2?: string;
        postal_code: string;
        state?: string;
      };
      name: string;
      service?: "express" | "priority" | "standard";
      type?: "bulk" | "individual";
    };
    spending_controls?: {
      allowed_categories?: (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[];
      blocked_categories?: (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[];
      spending_limits?: {
        amount: number;
        categories?: (
          | "ac_refrigeration_repair"
          | "accounting_bookkeeping_services"
          | "advertising_services"
          | "agricultural_cooperative"
          | "airlines_air_carriers"
          | "airports_flying_fields"
          | "ambulance_services"
          | "amusement_parks_carnivals"
          | "antique_reproductions"
          | "antique_shops"
          | "aquariums"
          | "architectural_surveying_services"
          | "art_dealers_and_galleries"
          | "artists_supply_and_craft_shops"
          | "auto_and_home_supply_stores"
          | "auto_body_repair_shops"
          | "auto_paint_shops"
          | "auto_service_shops"
          | "automated_cash_disburse"
          | "automated_fuel_dispensers"
          | "automobile_associations"
          | "automotive_parts_and_accessories_stores"
          | "automotive_tire_stores"
          | "bail_and_bond_payments"
          | "bakeries"
          | "bands_orchestras"
          | "barber_and_beauty_shops"
          | "betting_casino_gambling"
          | "bicycle_shops"
          | "billiard_pool_establishments"
          | "boat_dealers"
          | "boat_rentals_and_leases"
          | "book_stores"
          | "books_periodicals_and_newspapers"
          | "bowling_alleys"
          | "bus_lines"
          | "business_secretarial_schools"
          | "buying_shopping_services"
          | "cable_satellite_and_other_pay_television_and_radio"
          | "camera_and_photographic_supply_stores"
          | "candy_nut_and_confectionery_stores"
          | "car_and_truck_dealers_new_used"
          | "car_and_truck_dealers_used_only"
          | "car_rental_agencies"
          | "car_washes"
          | "carpentry_services"
          | "carpet_upholstery_cleaning"
          | "caterers"
          | "charitable_and_social_service_organizations_fundraising"
          | "chemicals_and_allied_products"
          | "child_care_services"
          | "childrens_and_infants_wear_stores"
          | "chiropodists_podiatrists"
          | "chiropractors"
          | "cigar_stores_and_stands"
          | "civic_social_fraternal_associations"
          | "cleaning_and_maintenance"
          | "clothing_rental"
          | "colleges_universities"
          | "commercial_equipment"
          | "commercial_footwear"
          | "commercial_photography_art_and_graphics"
          | "commuter_transport_and_ferries"
          | "computer_network_services"
          | "computer_programming"
          | "computer_repair"
          | "computer_software_stores"
          | "computers_peripherals_and_software"
          | "concrete_work_services"
          | "construction_materials"
          | "consulting_public_relations"
          | "correspondence_schools"
          | "cosmetic_stores"
          | "counseling_services"
          | "country_clubs"
          | "courier_services"
          | "court_costs"
          | "credit_reporting_agencies"
          | "cruise_lines"
          | "dairy_products_stores"
          | "dance_hall_studios_schools"
          | "dating_escort_services"
          | "dentists_orthodontists"
          | "department_stores"
          | "detective_agencies"
          | "digital_goods_applications"
          | "digital_goods_games"
          | "digital_goods_large_volume"
          | "digital_goods_media"
          | "direct_marketing_catalog_merchant"
          | "direct_marketing_combination_catalog_and_retail_merchant"
          | "direct_marketing_inbound_telemarketing"
          | "direct_marketing_insurance_services"
          | "direct_marketing_other"
          | "direct_marketing_outbound_telemarketing"
          | "direct_marketing_subscription"
          | "direct_marketing_travel"
          | "discount_stores"
          | "doctors"
          | "door_to_door_sales"
          | "drapery_window_covering_and_upholstery_stores"
          | "drinking_places"
          | "drug_stores_and_pharmacies"
          | "drugs_drug_proprietaries_and_druggist_sundries"
          | "dry_cleaners"
          | "durable_goods"
          | "duty_free_stores"
          | "eating_places_restaurants"
          | "educational_services"
          | "electric_razor_stores"
          | "electrical_parts_and_equipment"
          | "electrical_services"
          | "electronics_repair_shops"
          | "electronics_stores"
          | "elementary_secondary_schools"
          | "employment_temp_agencies"
          | "equipment_rental"
          | "exterminating_services"
          | "family_clothing_stores"
          | "fast_food_restaurants"
          | "financial_institutions"
          | "fines_government_administrative_entities"
          | "fireplace_fireplace_screens_and_accessories_stores"
          | "floor_covering_stores"
          | "florists"
          | "florists_supplies_nursery_stock_and_flowers"
          | "freezer_and_locker_meat_provisioners"
          | "fuel_dealers_non_automotive"
          | "funeral_services_crematories"
          | "furniture_home_furnishings_and_equipment_stores_except_appliances"
          | "furniture_repair_refinishing"
          | "furriers_and_fur_shops"
          | "general_services"
          | "gift_card_novelty_and_souvenir_shops"
          | "glass_paint_and_wallpaper_stores"
          | "glassware_crystal_stores"
          | "golf_courses_public"
          | "government_services"
          | "grocery_stores_supermarkets"
          | "hardware_equipment_and_supplies"
          | "hardware_stores"
          | "health_and_beauty_spas"
          | "hearing_aids_sales_and_supplies"
          | "heating_plumbing_a_c"
          | "hobby_toy_and_game_shops"
          | "home_supply_warehouse_stores"
          | "hospitals"
          | "hotels_motels_and_resorts"
          | "household_appliance_stores"
          | "industrial_supplies"
          | "information_retrieval_services"
          | "insurance_default"
          | "insurance_underwriting_premiums"
          | "intra_company_purchases"
          | "jewelry_stores_watches_clocks_and_silverware_stores"
          | "landscaping_services"
          | "laundries"
          | "laundry_cleaning_services"
          | "legal_services_attorneys"
          | "luggage_and_leather_goods_stores"
          | "lumber_building_materials_stores"
          | "manual_cash_disburse"
          | "marinas_service_and_supplies"
          | "masonry_stonework_and_plaster"
          | "massage_parlors"
          | "medical_and_dental_labs"
          | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
          | "medical_services"
          | "membership_organizations"
          | "mens_and_boys_clothing_and_accessories_stores"
          | "mens_womens_clothing_stores"
          | "metal_service_centers"
          | "miscellaneous"
          | "miscellaneous_apparel_and_accessory_shops"
          | "miscellaneous_auto_dealers"
          | "miscellaneous_business_services"
          | "miscellaneous_food_stores"
          | "miscellaneous_general_merchandise"
          | "miscellaneous_general_services"
          | "miscellaneous_home_furnishing_specialty_stores"
          | "miscellaneous_publishing_and_printing"
          | "miscellaneous_recreation_services"
          | "miscellaneous_repair_shops"
          | "miscellaneous_specialty_retail"
          | "mobile_home_dealers"
          | "motion_picture_theaters"
          | "motor_freight_carriers_and_trucking"
          | "motor_homes_dealers"
          | "motor_vehicle_supplies_and_new_parts"
          | "motorcycle_shops_and_dealers"
          | "motorcycle_shops_dealers"
          | "music_stores_musical_instruments_pianos_and_sheet_music"
          | "news_dealers_and_newsstands"
          | "non_fi_money_orders"
          | "non_fi_stored_value_card_purchase_load"
          | "nondurable_goods"
          | "nurseries_lawn_and_garden_supply_stores"
          | "nursing_personal_care"
          | "office_and_commercial_furniture"
          | "opticians_eyeglasses"
          | "optometrists_ophthalmologist"
          | "orthopedic_goods_prosthetic_devices"
          | "osteopaths"
          | "package_stores_beer_wine_and_liquor"
          | "paints_varnishes_and_supplies"
          | "parking_lots_garages"
          | "passenger_railways"
          | "pawn_shops"
          | "pet_shops_pet_food_and_supplies"
          | "petroleum_and_petroleum_products"
          | "photo_developing"
          | "photographic_photocopy_microfilm_equipment_and_supplies"
          | "photographic_studios"
          | "picture_video_production"
          | "piece_goods_notions_and_other_dry_goods"
          | "plumbing_heating_equipment_and_supplies"
          | "political_organizations"
          | "postal_services_government_only"
          | "precious_stones_and_metals_watches_and_jewelry"
          | "professional_services"
          | "public_warehousing_and_storage"
          | "quick_copy_repro_and_blueprint"
          | "railroads"
          | "real_estate_agents_and_managers_rentals"
          | "record_stores"
          | "recreational_vehicle_rentals"
          | "religious_goods_stores"
          | "religious_organizations"
          | "roofing_siding_sheet_metal"
          | "secretarial_support_services"
          | "security_brokers_dealers"
          | "service_stations"
          | "sewing_needlework_fabric_and_piece_goods_stores"
          | "shoe_repair_hat_cleaning"
          | "shoe_stores"
          | "small_appliance_repair"
          | "snowmobile_dealers"
          | "special_trade_services"
          | "specialty_cleaning"
          | "sporting_goods_stores"
          | "sporting_recreation_camps"
          | "sports_and_riding_apparel_stores"
          | "sports_clubs_fields"
          | "stamp_and_coin_stores"
          | "stationary_office_supplies_printing_and_writing_paper"
          | "stationery_stores_office_and_school_supply_stores"
          | "swimming_pools_sales"
          | "t_ui_travel_germany"
          | "tailors_alterations"
          | "tax_payments_government_agencies"
          | "tax_preparation_services"
          | "taxicabs_limousines"
          | "telecommunication_equipment_and_telephone_sales"
          | "telecommunication_services"
          | "telegraph_services"
          | "tent_and_awning_shops"
          | "testing_laboratories"
          | "theatrical_ticket_agencies"
          | "timeshares"
          | "tire_retreading_and_repair"
          | "tolls_bridge_fees"
          | "tourist_attractions_and_exhibits"
          | "towing_services"
          | "trailer_parks_campgrounds"
          | "transportation_services"
          | "travel_agencies_tour_operators"
          | "truck_stop_iteration"
          | "truck_utility_trailer_rentals"
          | "typesetting_plate_making_and_related_services"
          | "typewriter_stores"
          | "u_s_federal_government_agencies_or_departments"
          | "uniforms_commercial_clothing"
          | "used_merchandise_and_secondhand_stores"
          | "utilities"
          | "variety_stores"
          | "veterinary_services"
          | "video_amusement_game_supplies"
          | "video_game_arcades"
          | "video_tape_rental_stores"
          | "vocational_trade_schools"
          | "watch_jewelry_repair"
          | "welding_repair"
          | "wholesale_clubs"
          | "wig_and_toupee_stores"
          | "wires_money_orders"
          | "womens_accessory_and_specialty_shops"
          | "womens_ready_to_wear_stores"
          | "wrecking_and_salvage_yards"
        )[];
        interval:
          | "all_time"
          | "daily"
          | "monthly"
          | "per_authorization"
          | "weekly"
          | "yearly";
      }[];
    };
    status?: "active" | "inactive";
    type: "physical" | "virtual";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingCard;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/issuing/cards",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves an Issuing <code>Card</code> object.</p>
 */
export function getIssuingCardsCard(
  card: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingCard;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/cards/${card}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postIssuingCardsCard(
  card: string,
  body?: {
    cancellation_reason?: "lost" | "stolen";
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    spending_controls?: {
      allowed_categories?: (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[];
      blocked_categories?: (
        | "ac_refrigeration_repair"
        | "accounting_bookkeeping_services"
        | "advertising_services"
        | "agricultural_cooperative"
        | "airlines_air_carriers"
        | "airports_flying_fields"
        | "ambulance_services"
        | "amusement_parks_carnivals"
        | "antique_reproductions"
        | "antique_shops"
        | "aquariums"
        | "architectural_surveying_services"
        | "art_dealers_and_galleries"
        | "artists_supply_and_craft_shops"
        | "auto_and_home_supply_stores"
        | "auto_body_repair_shops"
        | "auto_paint_shops"
        | "auto_service_shops"
        | "automated_cash_disburse"
        | "automated_fuel_dispensers"
        | "automobile_associations"
        | "automotive_parts_and_accessories_stores"
        | "automotive_tire_stores"
        | "bail_and_bond_payments"
        | "bakeries"
        | "bands_orchestras"
        | "barber_and_beauty_shops"
        | "betting_casino_gambling"
        | "bicycle_shops"
        | "billiard_pool_establishments"
        | "boat_dealers"
        | "boat_rentals_and_leases"
        | "book_stores"
        | "books_periodicals_and_newspapers"
        | "bowling_alleys"
        | "bus_lines"
        | "business_secretarial_schools"
        | "buying_shopping_services"
        | "cable_satellite_and_other_pay_television_and_radio"
        | "camera_and_photographic_supply_stores"
        | "candy_nut_and_confectionery_stores"
        | "car_and_truck_dealers_new_used"
        | "car_and_truck_dealers_used_only"
        | "car_rental_agencies"
        | "car_washes"
        | "carpentry_services"
        | "carpet_upholstery_cleaning"
        | "caterers"
        | "charitable_and_social_service_organizations_fundraising"
        | "chemicals_and_allied_products"
        | "child_care_services"
        | "childrens_and_infants_wear_stores"
        | "chiropodists_podiatrists"
        | "chiropractors"
        | "cigar_stores_and_stands"
        | "civic_social_fraternal_associations"
        | "cleaning_and_maintenance"
        | "clothing_rental"
        | "colleges_universities"
        | "commercial_equipment"
        | "commercial_footwear"
        | "commercial_photography_art_and_graphics"
        | "commuter_transport_and_ferries"
        | "computer_network_services"
        | "computer_programming"
        | "computer_repair"
        | "computer_software_stores"
        | "computers_peripherals_and_software"
        | "concrete_work_services"
        | "construction_materials"
        | "consulting_public_relations"
        | "correspondence_schools"
        | "cosmetic_stores"
        | "counseling_services"
        | "country_clubs"
        | "courier_services"
        | "court_costs"
        | "credit_reporting_agencies"
        | "cruise_lines"
        | "dairy_products_stores"
        | "dance_hall_studios_schools"
        | "dating_escort_services"
        | "dentists_orthodontists"
        | "department_stores"
        | "detective_agencies"
        | "digital_goods_applications"
        | "digital_goods_games"
        | "digital_goods_large_volume"
        | "digital_goods_media"
        | "direct_marketing_catalog_merchant"
        | "direct_marketing_combination_catalog_and_retail_merchant"
        | "direct_marketing_inbound_telemarketing"
        | "direct_marketing_insurance_services"
        | "direct_marketing_other"
        | "direct_marketing_outbound_telemarketing"
        | "direct_marketing_subscription"
        | "direct_marketing_travel"
        | "discount_stores"
        | "doctors"
        | "door_to_door_sales"
        | "drapery_window_covering_and_upholstery_stores"
        | "drinking_places"
        | "drug_stores_and_pharmacies"
        | "drugs_drug_proprietaries_and_druggist_sundries"
        | "dry_cleaners"
        | "durable_goods"
        | "duty_free_stores"
        | "eating_places_restaurants"
        | "educational_services"
        | "electric_razor_stores"
        | "electrical_parts_and_equipment"
        | "electrical_services"
        | "electronics_repair_shops"
        | "electronics_stores"
        | "elementary_secondary_schools"
        | "employment_temp_agencies"
        | "equipment_rental"
        | "exterminating_services"
        | "family_clothing_stores"
        | "fast_food_restaurants"
        | "financial_institutions"
        | "fines_government_administrative_entities"
        | "fireplace_fireplace_screens_and_accessories_stores"
        | "floor_covering_stores"
        | "florists"
        | "florists_supplies_nursery_stock_and_flowers"
        | "freezer_and_locker_meat_provisioners"
        | "fuel_dealers_non_automotive"
        | "funeral_services_crematories"
        | "furniture_home_furnishings_and_equipment_stores_except_appliances"
        | "furniture_repair_refinishing"
        | "furriers_and_fur_shops"
        | "general_services"
        | "gift_card_novelty_and_souvenir_shops"
        | "glass_paint_and_wallpaper_stores"
        | "glassware_crystal_stores"
        | "golf_courses_public"
        | "government_services"
        | "grocery_stores_supermarkets"
        | "hardware_equipment_and_supplies"
        | "hardware_stores"
        | "health_and_beauty_spas"
        | "hearing_aids_sales_and_supplies"
        | "heating_plumbing_a_c"
        | "hobby_toy_and_game_shops"
        | "home_supply_warehouse_stores"
        | "hospitals"
        | "hotels_motels_and_resorts"
        | "household_appliance_stores"
        | "industrial_supplies"
        | "information_retrieval_services"
        | "insurance_default"
        | "insurance_underwriting_premiums"
        | "intra_company_purchases"
        | "jewelry_stores_watches_clocks_and_silverware_stores"
        | "landscaping_services"
        | "laundries"
        | "laundry_cleaning_services"
        | "legal_services_attorneys"
        | "luggage_and_leather_goods_stores"
        | "lumber_building_materials_stores"
        | "manual_cash_disburse"
        | "marinas_service_and_supplies"
        | "masonry_stonework_and_plaster"
        | "massage_parlors"
        | "medical_and_dental_labs"
        | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
        | "medical_services"
        | "membership_organizations"
        | "mens_and_boys_clothing_and_accessories_stores"
        | "mens_womens_clothing_stores"
        | "metal_service_centers"
        | "miscellaneous"
        | "miscellaneous_apparel_and_accessory_shops"
        | "miscellaneous_auto_dealers"
        | "miscellaneous_business_services"
        | "miscellaneous_food_stores"
        | "miscellaneous_general_merchandise"
        | "miscellaneous_general_services"
        | "miscellaneous_home_furnishing_specialty_stores"
        | "miscellaneous_publishing_and_printing"
        | "miscellaneous_recreation_services"
        | "miscellaneous_repair_shops"
        | "miscellaneous_specialty_retail"
        | "mobile_home_dealers"
        | "motion_picture_theaters"
        | "motor_freight_carriers_and_trucking"
        | "motor_homes_dealers"
        | "motor_vehicle_supplies_and_new_parts"
        | "motorcycle_shops_and_dealers"
        | "motorcycle_shops_dealers"
        | "music_stores_musical_instruments_pianos_and_sheet_music"
        | "news_dealers_and_newsstands"
        | "non_fi_money_orders"
        | "non_fi_stored_value_card_purchase_load"
        | "nondurable_goods"
        | "nurseries_lawn_and_garden_supply_stores"
        | "nursing_personal_care"
        | "office_and_commercial_furniture"
        | "opticians_eyeglasses"
        | "optometrists_ophthalmologist"
        | "orthopedic_goods_prosthetic_devices"
        | "osteopaths"
        | "package_stores_beer_wine_and_liquor"
        | "paints_varnishes_and_supplies"
        | "parking_lots_garages"
        | "passenger_railways"
        | "pawn_shops"
        | "pet_shops_pet_food_and_supplies"
        | "petroleum_and_petroleum_products"
        | "photo_developing"
        | "photographic_photocopy_microfilm_equipment_and_supplies"
        | "photographic_studios"
        | "picture_video_production"
        | "piece_goods_notions_and_other_dry_goods"
        | "plumbing_heating_equipment_and_supplies"
        | "political_organizations"
        | "postal_services_government_only"
        | "precious_stones_and_metals_watches_and_jewelry"
        | "professional_services"
        | "public_warehousing_and_storage"
        | "quick_copy_repro_and_blueprint"
        | "railroads"
        | "real_estate_agents_and_managers_rentals"
        | "record_stores"
        | "recreational_vehicle_rentals"
        | "religious_goods_stores"
        | "religious_organizations"
        | "roofing_siding_sheet_metal"
        | "secretarial_support_services"
        | "security_brokers_dealers"
        | "service_stations"
        | "sewing_needlework_fabric_and_piece_goods_stores"
        | "shoe_repair_hat_cleaning"
        | "shoe_stores"
        | "small_appliance_repair"
        | "snowmobile_dealers"
        | "special_trade_services"
        | "specialty_cleaning"
        | "sporting_goods_stores"
        | "sporting_recreation_camps"
        | "sports_and_riding_apparel_stores"
        | "sports_clubs_fields"
        | "stamp_and_coin_stores"
        | "stationary_office_supplies_printing_and_writing_paper"
        | "stationery_stores_office_and_school_supply_stores"
        | "swimming_pools_sales"
        | "t_ui_travel_germany"
        | "tailors_alterations"
        | "tax_payments_government_agencies"
        | "tax_preparation_services"
        | "taxicabs_limousines"
        | "telecommunication_equipment_and_telephone_sales"
        | "telecommunication_services"
        | "telegraph_services"
        | "tent_and_awning_shops"
        | "testing_laboratories"
        | "theatrical_ticket_agencies"
        | "timeshares"
        | "tire_retreading_and_repair"
        | "tolls_bridge_fees"
        | "tourist_attractions_and_exhibits"
        | "towing_services"
        | "trailer_parks_campgrounds"
        | "transportation_services"
        | "travel_agencies_tour_operators"
        | "truck_stop_iteration"
        | "truck_utility_trailer_rentals"
        | "typesetting_plate_making_and_related_services"
        | "typewriter_stores"
        | "u_s_federal_government_agencies_or_departments"
        | "uniforms_commercial_clothing"
        | "used_merchandise_and_secondhand_stores"
        | "utilities"
        | "variety_stores"
        | "veterinary_services"
        | "video_amusement_game_supplies"
        | "video_game_arcades"
        | "video_tape_rental_stores"
        | "vocational_trade_schools"
        | "watch_jewelry_repair"
        | "welding_repair"
        | "wholesale_clubs"
        | "wig_and_toupee_stores"
        | "wires_money_orders"
        | "womens_accessory_and_specialty_shops"
        | "womens_ready_to_wear_stores"
        | "wrecking_and_salvage_yards"
      )[];
      spending_limits?: {
        amount: number;
        categories?: (
          | "ac_refrigeration_repair"
          | "accounting_bookkeeping_services"
          | "advertising_services"
          | "agricultural_cooperative"
          | "airlines_air_carriers"
          | "airports_flying_fields"
          | "ambulance_services"
          | "amusement_parks_carnivals"
          | "antique_reproductions"
          | "antique_shops"
          | "aquariums"
          | "architectural_surveying_services"
          | "art_dealers_and_galleries"
          | "artists_supply_and_craft_shops"
          | "auto_and_home_supply_stores"
          | "auto_body_repair_shops"
          | "auto_paint_shops"
          | "auto_service_shops"
          | "automated_cash_disburse"
          | "automated_fuel_dispensers"
          | "automobile_associations"
          | "automotive_parts_and_accessories_stores"
          | "automotive_tire_stores"
          | "bail_and_bond_payments"
          | "bakeries"
          | "bands_orchestras"
          | "barber_and_beauty_shops"
          | "betting_casino_gambling"
          | "bicycle_shops"
          | "billiard_pool_establishments"
          | "boat_dealers"
          | "boat_rentals_and_leases"
          | "book_stores"
          | "books_periodicals_and_newspapers"
          | "bowling_alleys"
          | "bus_lines"
          | "business_secretarial_schools"
          | "buying_shopping_services"
          | "cable_satellite_and_other_pay_television_and_radio"
          | "camera_and_photographic_supply_stores"
          | "candy_nut_and_confectionery_stores"
          | "car_and_truck_dealers_new_used"
          | "car_and_truck_dealers_used_only"
          | "car_rental_agencies"
          | "car_washes"
          | "carpentry_services"
          | "carpet_upholstery_cleaning"
          | "caterers"
          | "charitable_and_social_service_organizations_fundraising"
          | "chemicals_and_allied_products"
          | "child_care_services"
          | "childrens_and_infants_wear_stores"
          | "chiropodists_podiatrists"
          | "chiropractors"
          | "cigar_stores_and_stands"
          | "civic_social_fraternal_associations"
          | "cleaning_and_maintenance"
          | "clothing_rental"
          | "colleges_universities"
          | "commercial_equipment"
          | "commercial_footwear"
          | "commercial_photography_art_and_graphics"
          | "commuter_transport_and_ferries"
          | "computer_network_services"
          | "computer_programming"
          | "computer_repair"
          | "computer_software_stores"
          | "computers_peripherals_and_software"
          | "concrete_work_services"
          | "construction_materials"
          | "consulting_public_relations"
          | "correspondence_schools"
          | "cosmetic_stores"
          | "counseling_services"
          | "country_clubs"
          | "courier_services"
          | "court_costs"
          | "credit_reporting_agencies"
          | "cruise_lines"
          | "dairy_products_stores"
          | "dance_hall_studios_schools"
          | "dating_escort_services"
          | "dentists_orthodontists"
          | "department_stores"
          | "detective_agencies"
          | "digital_goods_applications"
          | "digital_goods_games"
          | "digital_goods_large_volume"
          | "digital_goods_media"
          | "direct_marketing_catalog_merchant"
          | "direct_marketing_combination_catalog_and_retail_merchant"
          | "direct_marketing_inbound_telemarketing"
          | "direct_marketing_insurance_services"
          | "direct_marketing_other"
          | "direct_marketing_outbound_telemarketing"
          | "direct_marketing_subscription"
          | "direct_marketing_travel"
          | "discount_stores"
          | "doctors"
          | "door_to_door_sales"
          | "drapery_window_covering_and_upholstery_stores"
          | "drinking_places"
          | "drug_stores_and_pharmacies"
          | "drugs_drug_proprietaries_and_druggist_sundries"
          | "dry_cleaners"
          | "durable_goods"
          | "duty_free_stores"
          | "eating_places_restaurants"
          | "educational_services"
          | "electric_razor_stores"
          | "electrical_parts_and_equipment"
          | "electrical_services"
          | "electronics_repair_shops"
          | "electronics_stores"
          | "elementary_secondary_schools"
          | "employment_temp_agencies"
          | "equipment_rental"
          | "exterminating_services"
          | "family_clothing_stores"
          | "fast_food_restaurants"
          | "financial_institutions"
          | "fines_government_administrative_entities"
          | "fireplace_fireplace_screens_and_accessories_stores"
          | "floor_covering_stores"
          | "florists"
          | "florists_supplies_nursery_stock_and_flowers"
          | "freezer_and_locker_meat_provisioners"
          | "fuel_dealers_non_automotive"
          | "funeral_services_crematories"
          | "furniture_home_furnishings_and_equipment_stores_except_appliances"
          | "furniture_repair_refinishing"
          | "furriers_and_fur_shops"
          | "general_services"
          | "gift_card_novelty_and_souvenir_shops"
          | "glass_paint_and_wallpaper_stores"
          | "glassware_crystal_stores"
          | "golf_courses_public"
          | "government_services"
          | "grocery_stores_supermarkets"
          | "hardware_equipment_and_supplies"
          | "hardware_stores"
          | "health_and_beauty_spas"
          | "hearing_aids_sales_and_supplies"
          | "heating_plumbing_a_c"
          | "hobby_toy_and_game_shops"
          | "home_supply_warehouse_stores"
          | "hospitals"
          | "hotels_motels_and_resorts"
          | "household_appliance_stores"
          | "industrial_supplies"
          | "information_retrieval_services"
          | "insurance_default"
          | "insurance_underwriting_premiums"
          | "intra_company_purchases"
          | "jewelry_stores_watches_clocks_and_silverware_stores"
          | "landscaping_services"
          | "laundries"
          | "laundry_cleaning_services"
          | "legal_services_attorneys"
          | "luggage_and_leather_goods_stores"
          | "lumber_building_materials_stores"
          | "manual_cash_disburse"
          | "marinas_service_and_supplies"
          | "masonry_stonework_and_plaster"
          | "massage_parlors"
          | "medical_and_dental_labs"
          | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
          | "medical_services"
          | "membership_organizations"
          | "mens_and_boys_clothing_and_accessories_stores"
          | "mens_womens_clothing_stores"
          | "metal_service_centers"
          | "miscellaneous"
          | "miscellaneous_apparel_and_accessory_shops"
          | "miscellaneous_auto_dealers"
          | "miscellaneous_business_services"
          | "miscellaneous_food_stores"
          | "miscellaneous_general_merchandise"
          | "miscellaneous_general_services"
          | "miscellaneous_home_furnishing_specialty_stores"
          | "miscellaneous_publishing_and_printing"
          | "miscellaneous_recreation_services"
          | "miscellaneous_repair_shops"
          | "miscellaneous_specialty_retail"
          | "mobile_home_dealers"
          | "motion_picture_theaters"
          | "motor_freight_carriers_and_trucking"
          | "motor_homes_dealers"
          | "motor_vehicle_supplies_and_new_parts"
          | "motorcycle_shops_and_dealers"
          | "motorcycle_shops_dealers"
          | "music_stores_musical_instruments_pianos_and_sheet_music"
          | "news_dealers_and_newsstands"
          | "non_fi_money_orders"
          | "non_fi_stored_value_card_purchase_load"
          | "nondurable_goods"
          | "nurseries_lawn_and_garden_supply_stores"
          | "nursing_personal_care"
          | "office_and_commercial_furniture"
          | "opticians_eyeglasses"
          | "optometrists_ophthalmologist"
          | "orthopedic_goods_prosthetic_devices"
          | "osteopaths"
          | "package_stores_beer_wine_and_liquor"
          | "paints_varnishes_and_supplies"
          | "parking_lots_garages"
          | "passenger_railways"
          | "pawn_shops"
          | "pet_shops_pet_food_and_supplies"
          | "petroleum_and_petroleum_products"
          | "photo_developing"
          | "photographic_photocopy_microfilm_equipment_and_supplies"
          | "photographic_studios"
          | "picture_video_production"
          | "piece_goods_notions_and_other_dry_goods"
          | "plumbing_heating_equipment_and_supplies"
          | "political_organizations"
          | "postal_services_government_only"
          | "precious_stones_and_metals_watches_and_jewelry"
          | "professional_services"
          | "public_warehousing_and_storage"
          | "quick_copy_repro_and_blueprint"
          | "railroads"
          | "real_estate_agents_and_managers_rentals"
          | "record_stores"
          | "recreational_vehicle_rentals"
          | "religious_goods_stores"
          | "religious_organizations"
          | "roofing_siding_sheet_metal"
          | "secretarial_support_services"
          | "security_brokers_dealers"
          | "service_stations"
          | "sewing_needlework_fabric_and_piece_goods_stores"
          | "shoe_repair_hat_cleaning"
          | "shoe_stores"
          | "small_appliance_repair"
          | "snowmobile_dealers"
          | "special_trade_services"
          | "specialty_cleaning"
          | "sporting_goods_stores"
          | "sporting_recreation_camps"
          | "sports_and_riding_apparel_stores"
          | "sports_clubs_fields"
          | "stamp_and_coin_stores"
          | "stationary_office_supplies_printing_and_writing_paper"
          | "stationery_stores_office_and_school_supply_stores"
          | "swimming_pools_sales"
          | "t_ui_travel_germany"
          | "tailors_alterations"
          | "tax_payments_government_agencies"
          | "tax_preparation_services"
          | "taxicabs_limousines"
          | "telecommunication_equipment_and_telephone_sales"
          | "telecommunication_services"
          | "telegraph_services"
          | "tent_and_awning_shops"
          | "testing_laboratories"
          | "theatrical_ticket_agencies"
          | "timeshares"
          | "tire_retreading_and_repair"
          | "tolls_bridge_fees"
          | "tourist_attractions_and_exhibits"
          | "towing_services"
          | "trailer_parks_campgrounds"
          | "transportation_services"
          | "travel_agencies_tour_operators"
          | "truck_stop_iteration"
          | "truck_utility_trailer_rentals"
          | "typesetting_plate_making_and_related_services"
          | "typewriter_stores"
          | "u_s_federal_government_agencies_or_departments"
          | "uniforms_commercial_clothing"
          | "used_merchandise_and_secondhand_stores"
          | "utilities"
          | "variety_stores"
          | "veterinary_services"
          | "video_amusement_game_supplies"
          | "video_game_arcades"
          | "video_tape_rental_stores"
          | "vocational_trade_schools"
          | "watch_jewelry_repair"
          | "welding_repair"
          | "wholesale_clubs"
          | "wig_and_toupee_stores"
          | "wires_money_orders"
          | "womens_accessory_and_specialty_shops"
          | "womens_ready_to_wear_stores"
          | "wrecking_and_salvage_yards"
        )[];
        interval:
          | "all_time"
          | "daily"
          | "monthly"
          | "per_authorization"
          | "weekly"
          | "yearly";
      }[];
    };
    status?: "active" | "canceled" | "inactive";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingCard;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/cards/${card}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getIssuingDisputes(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
    status,
    transaction,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    status?: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
    transaction?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: IssuingDispute[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/disputes${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        status,
        transaction,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p>
 */
export function postIssuingDisputes(
  body: {
    evidence?: {
      canceled?:
        | {
            additional_documentation?: string | "";
            canceled_at?: number | "";
            cancellation_policy_provided?: boolean | "";
            cancellation_reason?: string;
            expected_at?: number | "";
            explanation?: string;
            product_description?: string;
            product_type?: "" | "merchandise" | "service";
            return_status?: "" | "merchant_rejected" | "successful";
            returned_at?: number | "";
          }
        | "";
      duplicate?:
        | {
            additional_documentation?: string | "";
            card_statement?: string | "";
            cash_receipt?: string | "";
            check_image?: string | "";
            explanation?: string;
            original_transaction?: string;
          }
        | "";
      fraudulent?:
        | {
            additional_documentation?: string | "";
            explanation?: string;
          }
        | "";
      merchandise_not_as_described?:
        | {
            additional_documentation?: string | "";
            explanation?: string;
            received_at?: number | "";
            return_description?: string;
            return_status?: "" | "merchant_rejected" | "successful";
            returned_at?: number | "";
          }
        | "";
      not_received?:
        | {
            additional_documentation?: string | "";
            expected_at?: number | "";
            explanation?: string;
            product_description?: string;
            product_type?: "" | "merchandise" | "service";
          }
        | "";
      other?:
        | {
            additional_documentation?: string | "";
            explanation?: string;
            product_description?: string;
            product_type?: "" | "merchandise" | "service";
          }
        | "";
      reason?:
        | "canceled"
        | "duplicate"
        | "fraudulent"
        | "merchandise_not_as_described"
        | "not_received"
        | "other"
        | "service_not_as_described";
      service_not_as_described?:
        | {
            additional_documentation?: string | "";
            canceled_at?: number | "";
            cancellation_reason?: string;
            explanation?: string;
            received_at?: number | "";
          }
        | "";
    };
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    transaction: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingDispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/issuing/disputes",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves an Issuing <code>Dispute</code> object.</p>
 */
export function getIssuingDisputesDispute(
  dispute: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingDispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/disputes/${dispute}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>
 */
export function postIssuingDisputesDispute(
  dispute: string,
  body?: {
    evidence?: {
      canceled?:
        | {
            additional_documentation?: string | "";
            canceled_at?: number | "";
            cancellation_policy_provided?: boolean | "";
            cancellation_reason?: string;
            expected_at?: number | "";
            explanation?: string;
            product_description?: string;
            product_type?: "" | "merchandise" | "service";
            return_status?: "" | "merchant_rejected" | "successful";
            returned_at?: number | "";
          }
        | "";
      duplicate?:
        | {
            additional_documentation?: string | "";
            card_statement?: string | "";
            cash_receipt?: string | "";
            check_image?: string | "";
            explanation?: string;
            original_transaction?: string;
          }
        | "";
      fraudulent?:
        | {
            additional_documentation?: string | "";
            explanation?: string;
          }
        | "";
      merchandise_not_as_described?:
        | {
            additional_documentation?: string | "";
            explanation?: string;
            received_at?: number | "";
            return_description?: string;
            return_status?: "" | "merchant_rejected" | "successful";
            returned_at?: number | "";
          }
        | "";
      not_received?:
        | {
            additional_documentation?: string | "";
            expected_at?: number | "";
            explanation?: string;
            product_description?: string;
            product_type?: "" | "merchandise" | "service";
          }
        | "";
      other?:
        | {
            additional_documentation?: string | "";
            explanation?: string;
            product_description?: string;
            product_type?: "" | "merchandise" | "service";
          }
        | "";
      reason?:
        | "canceled"
        | "duplicate"
        | "fraudulent"
        | "merchandise_not_as_described"
        | "not_received"
        | "other"
        | "service_not_as_described";
      service_not_as_described?:
        | {
            additional_documentation?: string | "";
            canceled_at?: number | "";
            cancellation_reason?: string;
            explanation?: string;
            received_at?: number | "";
          }
        | "";
    };
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingDispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/disputes/${dispute}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>
 */
export function postIssuingDisputesDisputeSubmit(
  dispute: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingDispute;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/disputes/${dispute}/submit`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of Issuing <code>Settlement</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getIssuingSettlements(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: IssuingSettlement[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/settlements${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves an Issuing <code>Settlement</code> object.</p>
 */
export function getIssuingSettlementsSettlement(
  settlement: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingSettlement;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/settlements/${settlement}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postIssuingSettlementsSettlement(
  settlement: string,
  body?: {
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingSettlement;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/settlements/${settlement}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getIssuingTransactions(
  body?: {},
  {
    card,
    cardholder,
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    card?: string;
    cardholder?: string;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: IssuingTransaction[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/transactions${QS.query(
      QS.form({
        card,
        cardholder,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves an Issuing <code>Transaction</code> object.</p>
 */
export function getIssuingTransactionsTransaction(
  transaction: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingTransaction;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/transactions/${transaction}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postIssuingTransactionsTransaction(
  transaction: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: IssuingTransaction;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/issuing/transactions/${transaction}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves a Mandate object.</p>
 */
export function getMandatesMandate(
  mandate: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Mandate;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/mandates/${mandate}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.</p>
 */
export function getOrderReturns(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    order,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    order?: string;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: OrderReturn[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/order_returns${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        order,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.</p>
 */
export function getOrderReturnsId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: OrderReturn;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/order_returns/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.</p>
 */
export function getOrders(
  body?: {},
  {
    created,
    customer,
    endingBefore,
    expand,
    ids,
    limit,
    startingAfter,
    status,
    statusTransitions,
    upstreamIds,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    ids?: string[];
    limit?: number;
    startingAfter?: string;
    status?: string;
    statusTransitions?: {
      canceled?:
        | {
            gt?: number;
            gte?: number;
            lt?: number;
            lte?: number;
          }
        | number;
      fulfilled?:
        | {
            gt?: number;
            gte?: number;
            lt?: number;
            lte?: number;
          }
        | number;
      paid?:
        | {
            gt?: number;
            gte?: number;
            lt?: number;
            lte?: number;
          }
        | number;
      returned?:
        | {
            gt?: number;
            gte?: number;
            lt?: number;
            lte?: number;
          }
        | number;
    };
    upstreamIds?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Order[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/orders${QS.query(
      QS.deep({
        created,
        expand,
        ids,
        status_transitions: statusTransitions,
        upstream_ids: upstreamIds,
      }),
      QS.form({
        customer,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        status,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new order object.</p>
 */
export function postOrders(
  body: {
    coupon?: string;
    currency: string;
    customer?: string;
    email?: string;
    expand?: string[];
    items?: {
      amount?: number;
      currency?: string;
      description?: string;
      parent?: string;
      quantity?: number;
      type?: "discount" | "shipping" | "sku" | "tax";
    }[];
    metadata?: {
      [key: string]: string;
    };
    shipping?: {
      address: {
        city?: string;
        country?: string;
        line1: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      name: string;
      phone?: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Order;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/orders",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.</p>
 */
export function getOrdersId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Order;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/orders/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postOrdersId(
  id: string,
  body?: {
    coupon?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    selected_shipping_method?: string;
    shipping?: {
      carrier: string;
      tracking_number: string;
    };
    status?: "canceled" | "created" | "fulfilled" | "paid" | "returned";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Order;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/orders/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Pay an order by providing a <code>source</code> to create a payment.</p>
 */
export function postOrdersIdPay(
  id: string,
  body?: {
    application_fee?: number;
    customer?: string;
    email?: string;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    source?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Order;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/orders/${id}/pay`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Return all or part of an order. The order must have a status of <code>paid</code> or <code>fulfilled</code> before it can be returned. Once all items have been returned, the order will become <code>canceled</code> or <code>returned</code> depending on which status the order started in.</p>
 */
export function postOrdersIdReturns(
  id: string,
  body?: {
    expand?: string[];
    items?:
      | {
          amount?: number;
          description?: string;
          parent?: string;
          quantity?: number;
          type?: "discount" | "shipping" | "sku" | "tax";
        }[]
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: OrderReturn;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/orders/${id}/returns`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of PaymentIntents.</p>
 */
export function getPaymentIntents(
  body?: {},
  {
    created,
    customer,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: PaymentIntent[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_intents${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        customer,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a PaymentIntent object.</p>
 *
 * <p>After the PaymentIntent is created, attach a payment method and <a href="/docs/api/payment_intents/confirm">confirm</a>
 * to continue the payment. You can read more about the different payment flows
 * available via the Payment Intents API <a href="/docs/payments/payment-intents">here</a>.</p>
 *
 * <p>When <code>confirm=true</code> is used during creation, it is equivalent to creating
 * and confirming the PaymentIntent in the same call. You may use any parameters
 * available in the <a href="/docs/api/payment_intents/confirm">confirm API</a> when <code>confirm=true</code>
 * is supplied.</p>
 */
export function postPaymentIntents(
  body: {
    amount: number;
    application_fee_amount?: number;
    capture_method?: "automatic" | "manual";
    confirm?: boolean;
    confirmation_method?: "automatic" | "manual";
    currency: string;
    customer?: string;
    description?: string;
    error_on_requires_action?: boolean;
    expand?: string[];
    mandate?: string;
    mandate_data?: {
      customer_acceptance: {
        accepted_at?: number;
        offline?: {};
        online?: {
          ip_address: string;
          user_agent: string;
        };
        type: "offline" | "online";
      };
    };
    metadata?: {
      [key: string]: string;
    };
    off_session?: boolean | ("one_off" | "recurring");
    on_behalf_of?: string;
    payment_method?: string;
    payment_method_data?: {
      alipay?: {};
      au_becs_debit?: {
        account_number: string;
        bsb_number: string;
      };
      bacs_debit?: {
        account_number?: string;
        sort_code?: string;
      };
      bancontact?: {};
      billing_details?: {
        address?:
          | {
              city?: string;
              country?: string;
              line1?: string;
              line2?: string;
              postal_code?: string;
              state?: string;
            }
          | "";
        email?: string;
        name?: string;
        phone?: string;
      };
      eps?: {};
      fpx?: {
        bank:
          | "affin_bank"
          | "alliance_bank"
          | "ambank"
          | "bank_islam"
          | "bank_muamalat"
          | "bank_rakyat"
          | "bsn"
          | "cimb"
          | "deutsche_bank"
          | "hong_leong_bank"
          | "hsbc"
          | "kfh"
          | "maybank2e"
          | "maybank2u"
          | "ocbc"
          | "pb_enterprise"
          | "public_bank"
          | "rhb"
          | "standard_chartered"
          | "uob";
      };
      giropay?: {};
      grabpay?: {};
      ideal?: {
        bank?:
          | "abn_amro"
          | "asn_bank"
          | "bunq"
          | "handelsbanken"
          | "ing"
          | "knab"
          | "moneyou"
          | "rabobank"
          | "regiobank"
          | "sns_bank"
          | "triodos_bank"
          | "van_lanschot";
      };
      interac_present?: {};
      metadata?: {
        [key: string]: string;
      };
      oxxo?: {};
      p24?: {
        bank?:
          | "alior_bank"
          | "bank_millennium"
          | "bank_nowy_bfg_sa"
          | "bank_pekao_sa"
          | "banki_spbdzielcze"
          | "blik"
          | "bnp_paribas"
          | "boz"
          | "citi_handlowy"
          | "credit_agricole"
          | "envelobank"
          | "etransfer_pocztowy24"
          | "getin_bank"
          | "ideabank"
          | "ing"
          | "inteligo"
          | "mbank_mtransfer"
          | "nest_przelew"
          | "noble_pay"
          | "pbac_z_ipko"
          | "plus_bank"
          | "santander_przelew24"
          | "tmobile_usbugi_bankowe"
          | "toyota_bank"
          | "volkswagen_bank";
      };
      sepa_debit?: {
        iban: string;
      };
      sofort?: {
        country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
      };
      type:
        | "alipay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "oxxo"
        | "p24"
        | "sepa_debit"
        | "sofort";
    };
    payment_method_options?: {
      alipay?: {} | "";
      bancontact?:
        | {
            preferred_language?: "de" | "en" | "fr" | "nl";
          }
        | "";
      card?:
        | {
            cvc_token?: string;
            installments?: {
              enabled?: boolean;
              plan?:
                | {
                    count: number;
                    interval: "month";
                    type: "fixed_count";
                  }
                | "";
            };
            network?:
              | "amex"
              | "cartes_bancaires"
              | "diners"
              | "discover"
              | "interac"
              | "jcb"
              | "mastercard"
              | "unionpay"
              | "unknown"
              | "visa";
            request_three_d_secure?: "any" | "automatic";
          }
        | "";
      oxxo?:
        | {
            expires_after_days?: number;
          }
        | "";
      p24?: {} | "";
      sepa_debit?:
        | {
            mandate_options?: {};
          }
        | "";
      sofort?:
        | {
            preferred_language?: "de" | "en" | "es" | "fr" | "it" | "nl" | "pl";
          }
        | "";
    };
    payment_method_types?: string[];
    receipt_email?: string;
    return_url?: string;
    setup_future_usage?: "off_session" | "on_session";
    shipping?: {
      address: {
        city?: string;
        country?: string;
        line1: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      carrier?: string;
      name: string;
      phone?: string;
      tracking_number?: string;
    };
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    transfer_data?: {
      amount?: number;
      destination: string;
    };
    transfer_group?: string;
    use_stripe_sdk?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/payment_intents",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of a PaymentIntent that has previously been created. </p>
 *
 * <p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>
 *
 * <p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p>
 */
export function getPaymentIntentsIntent(
  intent: string,
  body?: {},
  {
    clientSecret,
    expand,
  }: {
    clientSecret?: string;
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_intents/${intent}${QS.query(
      QS.form({
        client_secret: clientSecret,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates properties on a PaymentIntent object without confirming.</p>
 *
 * <p>Depending on which properties you update, you may need to confirm the
 * PaymentIntent again. For example, updating the <code>payment_method</code> will
 * always require you to confirm the PaymentIntent again. If you prefer to
 * update and confirm at the same time, we recommend updating properties via
 * the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p>
 */
export function postPaymentIntentsIntent(
  intent: string,
  body?: {
    amount?: number;
    application_fee_amount?: number | "";
    currency?: string;
    customer?: string;
    description?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    payment_method?: string;
    payment_method_data?: {
      alipay?: {};
      au_becs_debit?: {
        account_number: string;
        bsb_number: string;
      };
      bacs_debit?: {
        account_number?: string;
        sort_code?: string;
      };
      bancontact?: {};
      billing_details?: {
        address?:
          | {
              city?: string;
              country?: string;
              line1?: string;
              line2?: string;
              postal_code?: string;
              state?: string;
            }
          | "";
        email?: string;
        name?: string;
        phone?: string;
      };
      eps?: {};
      fpx?: {
        bank:
          | "affin_bank"
          | "alliance_bank"
          | "ambank"
          | "bank_islam"
          | "bank_muamalat"
          | "bank_rakyat"
          | "bsn"
          | "cimb"
          | "deutsche_bank"
          | "hong_leong_bank"
          | "hsbc"
          | "kfh"
          | "maybank2e"
          | "maybank2u"
          | "ocbc"
          | "pb_enterprise"
          | "public_bank"
          | "rhb"
          | "standard_chartered"
          | "uob";
      };
      giropay?: {};
      grabpay?: {};
      ideal?: {
        bank?:
          | "abn_amro"
          | "asn_bank"
          | "bunq"
          | "handelsbanken"
          | "ing"
          | "knab"
          | "moneyou"
          | "rabobank"
          | "regiobank"
          | "sns_bank"
          | "triodos_bank"
          | "van_lanschot";
      };
      interac_present?: {};
      metadata?: {
        [key: string]: string;
      };
      oxxo?: {};
      p24?: {
        bank?:
          | "alior_bank"
          | "bank_millennium"
          | "bank_nowy_bfg_sa"
          | "bank_pekao_sa"
          | "banki_spbdzielcze"
          | "blik"
          | "bnp_paribas"
          | "boz"
          | "citi_handlowy"
          | "credit_agricole"
          | "envelobank"
          | "etransfer_pocztowy24"
          | "getin_bank"
          | "ideabank"
          | "ing"
          | "inteligo"
          | "mbank_mtransfer"
          | "nest_przelew"
          | "noble_pay"
          | "pbac_z_ipko"
          | "plus_bank"
          | "santander_przelew24"
          | "tmobile_usbugi_bankowe"
          | "toyota_bank"
          | "volkswagen_bank";
      };
      sepa_debit?: {
        iban: string;
      };
      sofort?: {
        country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
      };
      type:
        | "alipay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "oxxo"
        | "p24"
        | "sepa_debit"
        | "sofort";
    };
    payment_method_options?: {
      alipay?: {} | "";
      bancontact?:
        | {
            preferred_language?: "de" | "en" | "fr" | "nl";
          }
        | "";
      card?:
        | {
            cvc_token?: string;
            installments?: {
              enabled?: boolean;
              plan?:
                | {
                    count: number;
                    interval: "month";
                    type: "fixed_count";
                  }
                | "";
            };
            network?:
              | "amex"
              | "cartes_bancaires"
              | "diners"
              | "discover"
              | "interac"
              | "jcb"
              | "mastercard"
              | "unionpay"
              | "unknown"
              | "visa";
            request_three_d_secure?: "any" | "automatic";
          }
        | "";
      oxxo?:
        | {
            expires_after_days?: number;
          }
        | "";
      p24?: {} | "";
      sepa_debit?:
        | {
            mandate_options?: {};
          }
        | "";
      sofort?:
        | {
            preferred_language?: "de" | "en" | "es" | "fr" | "it" | "nl" | "pl";
          }
        | "";
    };
    payment_method_types?: string[];
    receipt_email?: string | "";
    setup_future_usage?: "" | "off_session" | "on_session";
    shipping?:
      | {
          address: {
            city?: string;
            country?: string;
            line1: string;
            line2?: string;
            postal_code?: string;
            state?: string;
          };
          carrier?: string;
          name: string;
          phone?: string;
          tracking_number?: string;
        }
      | "";
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    transfer_data?: {
      amount?: number;
    };
    transfer_group?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_intents/${intent}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>A PaymentIntent object can be canceled when it is in one of these statuses: <code>requires_payment_method</code>, <code>requires_capture</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>
 *
 * <p>Once canceled, no additional charges will be made by the PaymentIntent and any operations on the PaymentIntent will fail with an error. For PaymentIntents with <code>status=’requires_capture’</code>, the remaining <code>amount_capturable</code> will automatically be refunded.</p>
 */
export function postPaymentIntentsIntentCancel(
  intent: string,
  body?: {
    cancellation_reason?:
      | "abandoned"
      | "duplicate"
      | "fraudulent"
      | "requested_by_customer";
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_intents/${intent}/cancel`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Capture the funds of an existing uncaptured PaymentIntent when its status is <code>requires_capture</code>.</p>
 *
 * <p>Uncaptured PaymentIntents will be canceled exactly seven days after they are created.</p>
 *
 * <p>Learn more about <a href="/docs/payments/capture-later">separate authorization and capture</a>.</p>
 */
export function postPaymentIntentsIntentCapture(
  intent: string,
  body?: {
    amount_to_capture?: number;
    application_fee_amount?: number;
    expand?: string[];
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    transfer_data?: {
      amount?: number;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_intents/${intent}/capture`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Confirm that your customer intends to pay with current or provided
 * payment method. Upon confirmation, the PaymentIntent will attempt to initiate
 * a payment.</p>
 *
 * <p>If the selected payment method requires additional authentication steps, the
 * PaymentIntent will transition to the <code>requires_action</code> status and
 * suggest additional actions via <code>next_action</code>. If payment fails,
 * the PaymentIntent will transition to the <code>requires_payment_method</code> status. If
 * payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
 * status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).</p>
 *
 * <p>If the <code>confirmation_method</code> is <code>automatic</code>, payment may be attempted
 * using our <a href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a>
 * and the PaymentIntent’s <a href="#payment_intent_object-client_secret">client_secret</a>.
 * After <code>next_action</code>s are handled by the client, no additional
 * confirmation is required to complete the payment.</p>
 *
 * <p>If the <code>confirmation_method</code> is <code>manual</code>, all payment attempts must be
 * initiated using a secret key.
 * If any actions are required for the payment, the PaymentIntent will
 * return to the <code>requires_confirmation</code> state
 * after those actions are completed. Your server needs to then
 * explicitly re-confirm the PaymentIntent to initiate the next payment
 * attempt. Read the <a href="/docs/payments/payment-intents/web-manual">expanded documentation</a>
 * to learn more about manual confirmation.</p>
 */
export function postPaymentIntentsIntentConfirm(
  intent: string,
  body?: {
    client_secret?: string;
    error_on_requires_action?: boolean;
    expand?: string[];
    mandate?: string;
    mandate_data?:
      | {
          customer_acceptance: {
            accepted_at?: number;
            offline?: {};
            online?: {
              ip_address: string;
              user_agent: string;
            };
            type: "offline" | "online";
          };
        }
      | {
          customer_acceptance: {
            online: {
              ip_address?: string;
              user_agent?: string;
            };
            type: "online";
          };
        };
    off_session?: boolean | ("one_off" | "recurring");
    payment_method?: string;
    payment_method_data?: {
      alipay?: {};
      au_becs_debit?: {
        account_number: string;
        bsb_number: string;
      };
      bacs_debit?: {
        account_number?: string;
        sort_code?: string;
      };
      bancontact?: {};
      billing_details?: {
        address?:
          | {
              city?: string;
              country?: string;
              line1?: string;
              line2?: string;
              postal_code?: string;
              state?: string;
            }
          | "";
        email?: string;
        name?: string;
        phone?: string;
      };
      eps?: {};
      fpx?: {
        bank:
          | "affin_bank"
          | "alliance_bank"
          | "ambank"
          | "bank_islam"
          | "bank_muamalat"
          | "bank_rakyat"
          | "bsn"
          | "cimb"
          | "deutsche_bank"
          | "hong_leong_bank"
          | "hsbc"
          | "kfh"
          | "maybank2e"
          | "maybank2u"
          | "ocbc"
          | "pb_enterprise"
          | "public_bank"
          | "rhb"
          | "standard_chartered"
          | "uob";
      };
      giropay?: {};
      grabpay?: {};
      ideal?: {
        bank?:
          | "abn_amro"
          | "asn_bank"
          | "bunq"
          | "handelsbanken"
          | "ing"
          | "knab"
          | "moneyou"
          | "rabobank"
          | "regiobank"
          | "sns_bank"
          | "triodos_bank"
          | "van_lanschot";
      };
      interac_present?: {};
      metadata?: {
        [key: string]: string;
      };
      oxxo?: {};
      p24?: {
        bank?:
          | "alior_bank"
          | "bank_millennium"
          | "bank_nowy_bfg_sa"
          | "bank_pekao_sa"
          | "banki_spbdzielcze"
          | "blik"
          | "bnp_paribas"
          | "boz"
          | "citi_handlowy"
          | "credit_agricole"
          | "envelobank"
          | "etransfer_pocztowy24"
          | "getin_bank"
          | "ideabank"
          | "ing"
          | "inteligo"
          | "mbank_mtransfer"
          | "nest_przelew"
          | "noble_pay"
          | "pbac_z_ipko"
          | "plus_bank"
          | "santander_przelew24"
          | "tmobile_usbugi_bankowe"
          | "toyota_bank"
          | "volkswagen_bank";
      };
      sepa_debit?: {
        iban: string;
      };
      sofort?: {
        country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
      };
      type:
        | "alipay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "oxxo"
        | "p24"
        | "sepa_debit"
        | "sofort";
    };
    payment_method_options?: {
      alipay?: {} | "";
      bancontact?:
        | {
            preferred_language?: "de" | "en" | "fr" | "nl";
          }
        | "";
      card?:
        | {
            cvc_token?: string;
            installments?: {
              enabled?: boolean;
              plan?:
                | {
                    count: number;
                    interval: "month";
                    type: "fixed_count";
                  }
                | "";
            };
            network?:
              | "amex"
              | "cartes_bancaires"
              | "diners"
              | "discover"
              | "interac"
              | "jcb"
              | "mastercard"
              | "unionpay"
              | "unknown"
              | "visa";
            request_three_d_secure?: "any" | "automatic";
          }
        | "";
      oxxo?:
        | {
            expires_after_days?: number;
          }
        | "";
      p24?: {} | "";
      sepa_debit?:
        | {
            mandate_options?: {};
          }
        | "";
      sofort?:
        | {
            preferred_language?: "de" | "en" | "es" | "fr" | "it" | "nl" | "pl";
          }
        | "";
    };
    payment_method_types?: string[];
    receipt_email?: string | "";
    return_url?: string;
    setup_future_usage?: "" | "off_session" | "on_session";
    shipping?:
      | {
          address: {
            city?: string;
            country?: string;
            line1: string;
            line2?: string;
            postal_code?: string;
            state?: string;
          };
          carrier?: string;
          name: string;
          phone?: string;
          tracking_number?: string;
        }
      | "";
    use_stripe_sdk?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_intents/${intent}/confirm`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of PaymentMethods for a given Customer</p>
 */
export function getPaymentMethods(
  customer: string,
  type:
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "card"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "oxxo"
    | "p24"
    | "sepa_debit"
    | "sofort",
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: PaymentMethod[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_methods${QS.query(
      QS.form({
        customer,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        type,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a PaymentMethod object. Read the <a href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js reference</a> to learn how to create PaymentMethods via Stripe.js.</p>
 */
export function postPaymentMethods(
  body?: {
    alipay?: {};
    au_becs_debit?: {
      account_number: string;
      bsb_number: string;
    };
    bacs_debit?: {
      account_number?: string;
      sort_code?: string;
    };
    bancontact?: {};
    billing_details?: {
      address?:
        | {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
          }
        | "";
      email?: string;
      name?: string;
      phone?: string;
    };
    card?:
      | {
          cvc?: string;
          exp_month: number;
          exp_year: number;
          number: string;
        }
      | {
          token: string;
        };
    customer?: string;
    eps?: {};
    expand?: string[];
    fpx?: {
      bank:
        | "affin_bank"
        | "alliance_bank"
        | "ambank"
        | "bank_islam"
        | "bank_muamalat"
        | "bank_rakyat"
        | "bsn"
        | "cimb"
        | "deutsche_bank"
        | "hong_leong_bank"
        | "hsbc"
        | "kfh"
        | "maybank2e"
        | "maybank2u"
        | "ocbc"
        | "pb_enterprise"
        | "public_bank"
        | "rhb"
        | "standard_chartered"
        | "uob";
    };
    giropay?: {};
    grabpay?: {};
    ideal?: {
      bank?:
        | "abn_amro"
        | "asn_bank"
        | "bunq"
        | "handelsbanken"
        | "ing"
        | "knab"
        | "moneyou"
        | "rabobank"
        | "regiobank"
        | "sns_bank"
        | "triodos_bank"
        | "van_lanschot";
    };
    interac_present?: {};
    metadata?: {
      [key: string]: string;
    };
    oxxo?: {};
    p24?: {
      bank?:
        | "alior_bank"
        | "bank_millennium"
        | "bank_nowy_bfg_sa"
        | "bank_pekao_sa"
        | "banki_spbdzielcze"
        | "blik"
        | "bnp_paribas"
        | "boz"
        | "citi_handlowy"
        | "credit_agricole"
        | "envelobank"
        | "etransfer_pocztowy24"
        | "getin_bank"
        | "ideabank"
        | "ing"
        | "inteligo"
        | "mbank_mtransfer"
        | "nest_przelew"
        | "noble_pay"
        | "pbac_z_ipko"
        | "plus_bank"
        | "santander_przelew24"
        | "tmobile_usbugi_bankowe"
        | "toyota_bank"
        | "volkswagen_bank";
    };
    payment_method?: string;
    sepa_debit?: {
      iban: string;
    };
    sofort?: {
      country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
    };
    type?:
      | "alipay"
      | "au_becs_debit"
      | "bacs_debit"
      | "bancontact"
      | "card"
      | "eps"
      | "fpx"
      | "giropay"
      | "grabpay"
      | "ideal"
      | "oxxo"
      | "p24"
      | "sepa_debit"
      | "sofort";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentMethod;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/payment_methods",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves a PaymentMethod object.</p>
 */
export function getPaymentMethodsPaymentMethod(
  paymentMethod: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentMethod;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_methods/${paymentMethod}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.</p>
 */
export function postPaymentMethodsPaymentMethod(
  paymentMethod: string,
  body?: {
    billing_details?: {
      address?:
        | {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
          }
        | "";
      email?: string;
      name?: string;
      phone?: string;
    };
    card?: {
      exp_month?: number;
      exp_year?: number;
    };
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentMethod;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_methods/${paymentMethod}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Attaches a PaymentMethod object to a Customer.</p>
 *
 * <p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
 * or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
 * These approaches will perform any necessary steps to ensure that the PaymentMethod can be used in a future payment. Using the
 * <code>/v1/payment_methods/:id/attach</code> endpoint does not ensure that future payments can be made with the attached PaymentMethod.
 * See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up future payments.</p>
 *
 * <p>To use this PaymentMethod as the default for invoice or subscription payments,
 * set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
 * on the Customer to the PaymentMethod’s ID.</p>
 */
export function postPaymentMethodsPaymentMethodAttach(
  paymentMethod: string,
  body: {
    customer: string;
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentMethod;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_methods/${paymentMethod}/attach`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Detaches a PaymentMethod object from a Customer.</p>
 */
export function postPaymentMethodsPaymentMethodDetach(
  paymentMethod: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PaymentMethod;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payment_methods/${paymentMethod}/detach`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.</p>
 */
export function getPayouts(
  body?: {},
  {
    arrivalDate,
    created,
    destination,
    endingBefore,
    expand,
    limit,
    startingAfter,
    status,
  }: {
    arrivalDate?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    destination?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    status?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Payout[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payouts${QS.query(
      QS.deep({
        arrival_date: arrivalDate,
        created,
        expand,
      }),
      QS.form({
        destination,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        status,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>To send funds to your own bank account, you create a new payout object. Your <a href="#balance">Stripe balance</a> must be able to cover the payout amount, or you’ll receive an “Insufficient Funds” error.</p>
 *
 * <p>If your API key is in test mode, money won’t actually be sent, though everything else will occur as if in live mode.</p>
 *
 * <p>If you are creating a manual payout on a Stripe account that uses multiple payment source types, you’ll need to specify the source type balance that the payout should draw from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>
 */
export function postPayouts(
  body: {
    amount: number;
    currency: string;
    description?: string;
    destination?: string;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    method?: "instant" | "standard";
    source_type?: "bank_account" | "card" | "fpx";
    statement_descriptor?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Payout;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/payouts",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.</p>
 */
export function getPayoutsPayout(
  payout: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Payout;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payouts/${payout}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.</p>
 */
export function postPayoutsPayout(
  payout: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Payout;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payouts/${payout}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic Stripe payouts.</p>
 */
export function postPayoutsPayoutCancel(
  payout: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Payout;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payouts/${payout}/cancel`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Reverses a payout by debiting the destination bank account. Only payouts for connected accounts to US bank accounts may be reversed at this time. If the payout is in the <code>pending</code> status, <code>/v1/payouts/:id/cancel</code> should be used instead.</p>
 *
 * <p>By requesting a reversal via <code>/v1/payouts/:id/reverse</code>, you confirm that the authorized signatory of the selected bank account has authorized the debit on the bank account and that no other authorization is required.</p>
 */
export function postPayoutsPayoutReverse(
  payout: string,
  body?: {
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Payout;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/payouts/${payout}/reverse`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your plans.</p>
 */
export function getPlans(
  body?: {},
  {
    active,
    created,
    endingBefore,
    expand,
    limit,
    product,
    startingAfter,
  }: {
    active?: boolean;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    product?: string;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Plan[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/plans${QS.query(
      QS.form({
        active,
        ending_before: endingBefore,
        limit,
        product,
        starting_after: startingAfter,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>
 */
export function postPlans(
  body: {
    active?: boolean;
    aggregate_usage?: "last_during_period" | "last_ever" | "max" | "sum";
    amount?: number;
    amount_decimal?: string;
    billing_scheme?: "per_unit" | "tiered";
    currency: string;
    expand?: string[];
    id?: string;
    interval: "day" | "month" | "week" | "year";
    interval_count?: number;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    nickname?: string;
    product?:
      | {
          active?: boolean;
          id?: string;
          metadata?: {
            [key: string]: string;
          };
          name: string;
          statement_descriptor?: string;
          unit_label?: string;
        }
      | string;
    tiers?: {
      flat_amount?: number;
      flat_amount_decimal?: string;
      unit_amount?: number;
      unit_amount_decimal?: string;
      up_to: "inf" | number;
    }[];
    tiers_mode?: "graduated" | "volume";
    transform_usage?: {
      divide_by: number;
      round: "down" | "up";
    };
    trial_period_days?: number;
    usage_type?: "licensed" | "metered";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Plan;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/plans",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>
 */
export function deletePlansPlan(
  plan: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedPlan;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/plans/${plan}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the plan with the given ID.</p>
 */
export function getPlansPlan(
  plan: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Plan;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/plans/${plan}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>
 */
export function postPlansPlan(
  plan: string,
  body?: {
    active?: boolean;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    nickname?: string;
    product?: string;
    trial_period_days?: number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Plan;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/plans/${plan}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your prices.</p>
 */
export function getPrices(
  body?: {},
  {
    active,
    created,
    currency,
    endingBefore,
    expand,
    limit,
    lookupKeys,
    product,
    recurring,
    startingAfter,
    type,
  }: {
    active?: boolean;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    currency?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    lookupKeys?: string[];
    product?: string;
    recurring?: {
      interval?: "day" | "month" | "week" | "year";
      usage_type?: "licensed" | "metered";
    };
    startingAfter?: string;
    type?: "one_time" | "recurring";
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Price[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/prices${QS.query(
      QS.form({
        active,
        currency,
        ending_before: endingBefore,
        limit,
        product,
        starting_after: startingAfter,
        type,
      }),
      QS.deep({
        created,
        expand,
        lookup_keys: lookupKeys,
        recurring,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new price for an existing product. The price can be recurring or one-time.</p>
 */
export function postPrices(
  body: {
    active?: boolean;
    billing_scheme?: "per_unit" | "tiered";
    currency: string;
    expand?: string[];
    lookup_key?: string;
    metadata?: {
      [key: string]: string;
    };
    nickname?: string;
    product?: string;
    product_data?: {
      active?: boolean;
      id?: string;
      metadata?: {
        [key: string]: string;
      };
      name: string;
      statement_descriptor?: string;
      unit_label?: string;
    };
    recurring?: {
      aggregate_usage?: "last_during_period" | "last_ever" | "max" | "sum";
      interval: "day" | "month" | "week" | "year";
      interval_count?: number;
      usage_type?: "licensed" | "metered";
    };
    tiers?: {
      flat_amount?: number;
      flat_amount_decimal?: string;
      unit_amount?: number;
      unit_amount_decimal?: string;
      up_to: "inf" | number;
    }[];
    tiers_mode?: "graduated" | "volume";
    transfer_lookup_key?: boolean;
    transform_quantity?: {
      divide_by: number;
      round: "down" | "up";
    };
    unit_amount?: number;
    unit_amount_decimal?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Price;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/prices",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the price with the given ID.</p>
 */
export function getPricesPrice(
  price: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Price;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/prices/${price}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>
 */
export function postPricesPrice(
  price: string,
  body?: {
    active?: boolean;
    expand?: string[];
    lookup_key?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    nickname?: string;
    transfer_lookup_key?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Price;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/prices/${price}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>
 */
export function getProducts(
  body?: {},
  {
    active,
    created,
    endingBefore,
    expand,
    ids,
    limit,
    shippable,
    startingAfter,
    url,
  }: {
    active?: boolean;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    ids?: string[];
    limit?: number;
    shippable?: boolean;
    startingAfter?: string;
    url?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Product[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/products${QS.query(
      QS.form({
        active,
        ending_before: endingBefore,
        limit,
        shippable,
        starting_after: startingAfter,
        url,
      }),
      QS.deep({
        created,
        expand,
        ids,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new product object.</p>
 */
export function postProducts(
  body: {
    active?: boolean;
    attributes?: string[];
    caption?: string;
    deactivate_on?: string[];
    description?: string;
    expand?: string[];
    id?: string;
    images?: string[];
    metadata?: {
      [key: string]: string;
    };
    name: string;
    package_dimensions?: {
      height: number;
      length: number;
      weight: number;
      width: number;
    };
    shippable?: boolean;
    statement_descriptor?: string;
    unit_label?: string;
    url?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Product;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/products",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p>
 */
export function deleteProductsId(
  id: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedProduct;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/products/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>
 */
export function getProductsId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Product;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/products/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postProductsId(
  id: string,
  body?: {
    active?: boolean;
    attributes?: string[] | "";
    caption?: string;
    deactivate_on?: string[];
    description?: string;
    expand?: string[];
    images?: string[] | "";
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
    package_dimensions?:
      | {
          height: number;
          length: number;
          weight: number;
          width: number;
        }
      | "";
    shippable?: boolean;
    statement_descriptor?: string;
    unit_label?: string;
    url?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Product;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/products/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your promotion codes.</p>
 */
export function getPromotionCodes(
  body?: {},
  {
    active,
    code,
    coupon,
    created,
    customer,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    active?: boolean;
    code?: string;
    coupon?: string;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: PromotionCode[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/promotion_codes${QS.query(
      QS.form({
        active,
        code,
        coupon,
        customer,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>
 */
export function postPromotionCodes(
  body: {
    active?: boolean;
    code?: string;
    coupon: string;
    customer?: string;
    expand?: string[];
    expires_at?: number;
    max_redemptions?: number;
    metadata?: {
      [key: string]: string;
    };
    restrictions?: {
      first_time_transaction?: boolean;
      minimum_amount?: number;
      minimum_amount_currency?: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PromotionCode;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/promotion_codes",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the promotion code with the given ID.</p>
 */
export function getPromotionCodesPromotionCode(
  promotionCode: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PromotionCode;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/promotion_codes/${promotionCode}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>
 */
export function postPromotionCodesPromotionCode(
  promotionCode: string,
  body?: {
    active?: boolean;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: PromotionCode;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/promotion_codes/${promotionCode}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of early fraud warnings.</p>
 */
export function getRadarEarlyFraudWarnings(
  body?: {},
  {
    charge,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    charge?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: RadarEarlyFraudWarning[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/early_fraud_warnings${QS.query(
      QS.form({
        charge,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an early fraud warning that has previously been created. </p>
 *
 * <p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>
 */
export function getRadarEarlyFraudWarningsEarlyFraudWarning(
  earlyFraudWarning: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarEarlyFraudWarning;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/early_fraud_warnings/${earlyFraudWarning}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getRadarValueListItems(
  valueList: string,
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
    value,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    value?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: RadarListListItem[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/value_list_items${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        value,
        value_list: valueList,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>
 */
export function postRadarValueListItems(
  body: {
    expand?: string[];
    value: string;
    value_list: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarListListItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/radar/value_list_items",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>
 */
export function deleteRadarValueListItemsItem(
  item: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarListDeletedListItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/value_list_items/${item}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves a <code>ValueListItem</code> object.</p>
 */
export function getRadarValueListItemsItem(
  item: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarListListItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/value_list_items/${item}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getRadarValueLists(
  body?: {},
  {
    alias,
    contains,
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    alias?: string;
    contains?: string;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: RadarListList[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/value_lists${QS.query(
      QS.form({
        alias,
        contains,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>
 */
export function postRadarValueLists(
  body: {
    alias: string;
    expand?: string[];
    item_type?:
      | "card_bin"
      | "card_fingerprint"
      | "case_sensitive_string"
      | "country"
      | "email"
      | "ip_address"
      | "string";
    metadata?: {
      [key: string]: string;
    };
    name: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarListList;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/radar/value_lists",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>
 */
export function deleteRadarValueListsValueList(
  valueList: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarListDeletedList;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/value_lists/${valueList}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves a <code>ValueList</code> object.</p>
 */
export function getRadarValueListsValueList(
  valueList: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarListList;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/value_lists/${valueList}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>
 */
export function postRadarValueListsValueList(
  valueList: string,
  body?: {
    alias?: string;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    name?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarListList;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/radar/value_lists/${valueList}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your recipients. The recipients are returned sorted by creation date, with the most recently created recipients appearing first.</p>
 */
export function getRecipients(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
    type,
    verified,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    type?: "corporation" | "individual";
    verified?: boolean;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: TransferRecipient[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/recipients${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        type,
        verified,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new <code>Recipient</code> object and verifies the recipient’s identity.
 * Also verifies the recipient’s bank account information or debit card, if either is provided.</p>
 */
export function postRecipients(
  body: {
    bank_account?: string;
    card?: string;
    description?: string;
    email?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name: string;
    tax_id?: string;
    type: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TransferRecipient;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/recipients",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Permanently deletes a recipient. It cannot be undone.</p>
 */
export function deleteRecipientsId(
  id: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedTransferRecipient;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/recipients/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.</p>
 */
export function getRecipientsId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TransferRecipient | DeletedTransferRecipient;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/recipients/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified recipient by setting the values of the parameters passed.
 * Any parameters not provided will be left unchanged.</p>
 *
 * <p>If you update the name or tax ID, the identity verification will automatically be rerun.
 * If you update the bank account, the bank account validation will automatically be rerun.</p>
 */
export function postRecipientsId(
  id: string,
  body?: {
    bank_account?: string;
    card?: string;
    default_card?: string;
    description?: string;
    email?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    name?: string;
    tax_id?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TransferRecipient;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/recipients/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.</p>
 */
export function getRefunds(
  body?: {},
  {
    charge,
    created,
    endingBefore,
    expand,
    limit,
    paymentIntent,
    startingAfter,
  }: {
    charge?: string;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    paymentIntent?: string;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Refund[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/refunds${QS.query(
      QS.form({
        charge,
        ending_before: endingBefore,
        limit,
        payment_intent: paymentIntent,
        starting_after: startingAfter,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Create a refund.</p>
 */
export function postRefunds(
  body?: {
    amount?: number;
    charge?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    payment_intent?: string;
    reason?: "duplicate" | "fraudulent" | "requested_by_customer";
    refund_application_fee?: boolean;
    reverse_transfer?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Refund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/refunds",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing refund.</p>
 */
export function getRefundsRefund(
  refund: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Refund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/refunds/${refund}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 *
 * <p>This request only accepts <code>metadata</code> as an argument.</p>
 */
export function postRefundsRefund(
  refund: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Refund;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/refunds/${refund}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of Report Runs, with the most recent appearing first. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
 */
export function getReportingReportRuns(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Reporting_report_run[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/reporting/report_runs${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new object and begin running the report. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
 */
export function postReportingReportRuns(
  body: {
    expand?: string[];
    parameters?: {
      columns?: string[];
      connected_account?: string;
      currency?: string;
      interval_end?: number;
      interval_start?: number;
      payout?: string;
      reporting_category?:
        | "advance"
        | "advance_funding"
        | "anticipation_repayment"
        | "charge"
        | "charge_failure"
        | "connect_collection_transfer"
        | "connect_reserved_funds"
        | "contribution"
        | "dispute"
        | "dispute_reversal"
        | "fee"
        | "financing_paydown"
        | "financing_paydown_reversal"
        | "financing_payout"
        | "financing_payout_reversal"
        | "issuing_authorization_hold"
        | "issuing_authorization_release"
        | "issuing_dispute"
        | "issuing_transaction"
        | "network_cost"
        | "other_adjustment"
        | "partial_capture_reversal"
        | "payout"
        | "payout_reversal"
        | "platform_earning"
        | "platform_earning_refund"
        | "refund"
        | "refund_failure"
        | "risk_reserved_funds"
        | "tax"
        | "topup"
        | "topup_reversal"
        | "transfer"
        | "transfer_reversal";
      timezone?:
        | "Africa/Abidjan"
        | "Africa/Accra"
        | "Africa/Addis_Ababa"
        | "Africa/Algiers"
        | "Africa/Asmara"
        | "Africa/Asmera"
        | "Africa/Bamako"
        | "Africa/Bangui"
        | "Africa/Banjul"
        | "Africa/Bissau"
        | "Africa/Blantyre"
        | "Africa/Brazzaville"
        | "Africa/Bujumbura"
        | "Africa/Cairo"
        | "Africa/Casablanca"
        | "Africa/Ceuta"
        | "Africa/Conakry"
        | "Africa/Dakar"
        | "Africa/Dar_es_Salaam"
        | "Africa/Djibouti"
        | "Africa/Douala"
        | "Africa/El_Aaiun"
        | "Africa/Freetown"
        | "Africa/Gaborone"
        | "Africa/Harare"
        | "Africa/Johannesburg"
        | "Africa/Juba"
        | "Africa/Kampala"
        | "Africa/Khartoum"
        | "Africa/Kigali"
        | "Africa/Kinshasa"
        | "Africa/Lagos"
        | "Africa/Libreville"
        | "Africa/Lome"
        | "Africa/Luanda"
        | "Africa/Lubumbashi"
        | "Africa/Lusaka"
        | "Africa/Malabo"
        | "Africa/Maputo"
        | "Africa/Maseru"
        | "Africa/Mbabane"
        | "Africa/Mogadishu"
        | "Africa/Monrovia"
        | "Africa/Nairobi"
        | "Africa/Ndjamena"
        | "Africa/Niamey"
        | "Africa/Nouakchott"
        | "Africa/Ouagadougou"
        | "Africa/Porto-Novo"
        | "Africa/Sao_Tome"
        | "Africa/Timbuktu"
        | "Africa/Tripoli"
        | "Africa/Tunis"
        | "Africa/Windhoek"
        | "America/Adak"
        | "America/Anchorage"
        | "America/Anguilla"
        | "America/Antigua"
        | "America/Araguaina"
        | "America/Argentina/Buenos_Aires"
        | "America/Argentina/Catamarca"
        | "America/Argentina/ComodRivadavia"
        | "America/Argentina/Cordoba"
        | "America/Argentina/Jujuy"
        | "America/Argentina/La_Rioja"
        | "America/Argentina/Mendoza"
        | "America/Argentina/Rio_Gallegos"
        | "America/Argentina/Salta"
        | "America/Argentina/San_Juan"
        | "America/Argentina/San_Luis"
        | "America/Argentina/Tucuman"
        | "America/Argentina/Ushuaia"
        | "America/Aruba"
        | "America/Asuncion"
        | "America/Atikokan"
        | "America/Atka"
        | "America/Bahia"
        | "America/Bahia_Banderas"
        | "America/Barbados"
        | "America/Belem"
        | "America/Belize"
        | "America/Blanc-Sablon"
        | "America/Boa_Vista"
        | "America/Bogota"
        | "America/Boise"
        | "America/Buenos_Aires"
        | "America/Cambridge_Bay"
        | "America/Campo_Grande"
        | "America/Cancun"
        | "America/Caracas"
        | "America/Catamarca"
        | "America/Cayenne"
        | "America/Cayman"
        | "America/Chicago"
        | "America/Chihuahua"
        | "America/Coral_Harbour"
        | "America/Cordoba"
        | "America/Costa_Rica"
        | "America/Creston"
        | "America/Cuiaba"
        | "America/Curacao"
        | "America/Danmarkshavn"
        | "America/Dawson"
        | "America/Dawson_Creek"
        | "America/Denver"
        | "America/Detroit"
        | "America/Dominica"
        | "America/Edmonton"
        | "America/Eirunepe"
        | "America/El_Salvador"
        | "America/Ensenada"
        | "America/Fort_Nelson"
        | "America/Fort_Wayne"
        | "America/Fortaleza"
        | "America/Glace_Bay"
        | "America/Godthab"
        | "America/Goose_Bay"
        | "America/Grand_Turk"
        | "America/Grenada"
        | "America/Guadeloupe"
        | "America/Guatemala"
        | "America/Guayaquil"
        | "America/Guyana"
        | "America/Halifax"
        | "America/Havana"
        | "America/Hermosillo"
        | "America/Indiana/Indianapolis"
        | "America/Indiana/Knox"
        | "America/Indiana/Marengo"
        | "America/Indiana/Petersburg"
        | "America/Indiana/Tell_City"
        | "America/Indiana/Vevay"
        | "America/Indiana/Vincennes"
        | "America/Indiana/Winamac"
        | "America/Indianapolis"
        | "America/Inuvik"
        | "America/Iqaluit"
        | "America/Jamaica"
        | "America/Jujuy"
        | "America/Juneau"
        | "America/Kentucky/Louisville"
        | "America/Kentucky/Monticello"
        | "America/Knox_IN"
        | "America/Kralendijk"
        | "America/La_Paz"
        | "America/Lima"
        | "America/Los_Angeles"
        | "America/Louisville"
        | "America/Lower_Princes"
        | "America/Maceio"
        | "America/Managua"
        | "America/Manaus"
        | "America/Marigot"
        | "America/Martinique"
        | "America/Matamoros"
        | "America/Mazatlan"
        | "America/Mendoza"
        | "America/Menominee"
        | "America/Merida"
        | "America/Metlakatla"
        | "America/Mexico_City"
        | "America/Miquelon"
        | "America/Moncton"
        | "America/Monterrey"
        | "America/Montevideo"
        | "America/Montreal"
        | "America/Montserrat"
        | "America/Nassau"
        | "America/New_York"
        | "America/Nipigon"
        | "America/Nome"
        | "America/Noronha"
        | "America/North_Dakota/Beulah"
        | "America/North_Dakota/Center"
        | "America/North_Dakota/New_Salem"
        | "America/Ojinaga"
        | "America/Panama"
        | "America/Pangnirtung"
        | "America/Paramaribo"
        | "America/Phoenix"
        | "America/Port-au-Prince"
        | "America/Port_of_Spain"
        | "America/Porto_Acre"
        | "America/Porto_Velho"
        | "America/Puerto_Rico"
        | "America/Punta_Arenas"
        | "America/Rainy_River"
        | "America/Rankin_Inlet"
        | "America/Recife"
        | "America/Regina"
        | "America/Resolute"
        | "America/Rio_Branco"
        | "America/Rosario"
        | "America/Santa_Isabel"
        | "America/Santarem"
        | "America/Santiago"
        | "America/Santo_Domingo"
        | "America/Sao_Paulo"
        | "America/Scoresbysund"
        | "America/Shiprock"
        | "America/Sitka"
        | "America/St_Barthelemy"
        | "America/St_Johns"
        | "America/St_Kitts"
        | "America/St_Lucia"
        | "America/St_Thomas"
        | "America/St_Vincent"
        | "America/Swift_Current"
        | "America/Tegucigalpa"
        | "America/Thule"
        | "America/Thunder_Bay"
        | "America/Tijuana"
        | "America/Toronto"
        | "America/Tortola"
        | "America/Vancouver"
        | "America/Virgin"
        | "America/Whitehorse"
        | "America/Winnipeg"
        | "America/Yakutat"
        | "America/Yellowknife"
        | "Antarctica/Casey"
        | "Antarctica/Davis"
        | "Antarctica/DumontDUrville"
        | "Antarctica/Macquarie"
        | "Antarctica/Mawson"
        | "Antarctica/McMurdo"
        | "Antarctica/Palmer"
        | "Antarctica/Rothera"
        | "Antarctica/South_Pole"
        | "Antarctica/Syowa"
        | "Antarctica/Troll"
        | "Antarctica/Vostok"
        | "Arctic/Longyearbyen"
        | "Asia/Aden"
        | "Asia/Almaty"
        | "Asia/Amman"
        | "Asia/Anadyr"
        | "Asia/Aqtau"
        | "Asia/Aqtobe"
        | "Asia/Ashgabat"
        | "Asia/Ashkhabad"
        | "Asia/Atyrau"
        | "Asia/Baghdad"
        | "Asia/Bahrain"
        | "Asia/Baku"
        | "Asia/Bangkok"
        | "Asia/Barnaul"
        | "Asia/Beirut"
        | "Asia/Bishkek"
        | "Asia/Brunei"
        | "Asia/Calcutta"
        | "Asia/Chita"
        | "Asia/Choibalsan"
        | "Asia/Chongqing"
        | "Asia/Chungking"
        | "Asia/Colombo"
        | "Asia/Dacca"
        | "Asia/Damascus"
        | "Asia/Dhaka"
        | "Asia/Dili"
        | "Asia/Dubai"
        | "Asia/Dushanbe"
        | "Asia/Famagusta"
        | "Asia/Gaza"
        | "Asia/Harbin"
        | "Asia/Hebron"
        | "Asia/Ho_Chi_Minh"
        | "Asia/Hong_Kong"
        | "Asia/Hovd"
        | "Asia/Irkutsk"
        | "Asia/Istanbul"
        | "Asia/Jakarta"
        | "Asia/Jayapura"
        | "Asia/Jerusalem"
        | "Asia/Kabul"
        | "Asia/Kamchatka"
        | "Asia/Karachi"
        | "Asia/Kashgar"
        | "Asia/Kathmandu"
        | "Asia/Katmandu"
        | "Asia/Khandyga"
        | "Asia/Kolkata"
        | "Asia/Krasnoyarsk"
        | "Asia/Kuala_Lumpur"
        | "Asia/Kuching"
        | "Asia/Kuwait"
        | "Asia/Macao"
        | "Asia/Macau"
        | "Asia/Magadan"
        | "Asia/Makassar"
        | "Asia/Manila"
        | "Asia/Muscat"
        | "Asia/Nicosia"
        | "Asia/Novokuznetsk"
        | "Asia/Novosibirsk"
        | "Asia/Omsk"
        | "Asia/Oral"
        | "Asia/Phnom_Penh"
        | "Asia/Pontianak"
        | "Asia/Pyongyang"
        | "Asia/Qatar"
        | "Asia/Qostanay"
        | "Asia/Qyzylorda"
        | "Asia/Rangoon"
        | "Asia/Riyadh"
        | "Asia/Saigon"
        | "Asia/Sakhalin"
        | "Asia/Samarkand"
        | "Asia/Seoul"
        | "Asia/Shanghai"
        | "Asia/Singapore"
        | "Asia/Srednekolymsk"
        | "Asia/Taipei"
        | "Asia/Tashkent"
        | "Asia/Tbilisi"
        | "Asia/Tehran"
        | "Asia/Tel_Aviv"
        | "Asia/Thimbu"
        | "Asia/Thimphu"
        | "Asia/Tokyo"
        | "Asia/Tomsk"
        | "Asia/Ujung_Pandang"
        | "Asia/Ulaanbaatar"
        | "Asia/Ulan_Bator"
        | "Asia/Urumqi"
        | "Asia/Ust-Nera"
        | "Asia/Vientiane"
        | "Asia/Vladivostok"
        | "Asia/Yakutsk"
        | "Asia/Yangon"
        | "Asia/Yekaterinburg"
        | "Asia/Yerevan"
        | "Atlantic/Azores"
        | "Atlantic/Bermuda"
        | "Atlantic/Canary"
        | "Atlantic/Cape_Verde"
        | "Atlantic/Faeroe"
        | "Atlantic/Faroe"
        | "Atlantic/Jan_Mayen"
        | "Atlantic/Madeira"
        | "Atlantic/Reykjavik"
        | "Atlantic/South_Georgia"
        | "Atlantic/St_Helena"
        | "Atlantic/Stanley"
        | "Australia/ACT"
        | "Australia/Adelaide"
        | "Australia/Brisbane"
        | "Australia/Broken_Hill"
        | "Australia/Canberra"
        | "Australia/Currie"
        | "Australia/Darwin"
        | "Australia/Eucla"
        | "Australia/Hobart"
        | "Australia/LHI"
        | "Australia/Lindeman"
        | "Australia/Lord_Howe"
        | "Australia/Melbourne"
        | "Australia/NSW"
        | "Australia/North"
        | "Australia/Perth"
        | "Australia/Queensland"
        | "Australia/South"
        | "Australia/Sydney"
        | "Australia/Tasmania"
        | "Australia/Victoria"
        | "Australia/West"
        | "Australia/Yancowinna"
        | "Brazil/Acre"
        | "Brazil/DeNoronha"
        | "Brazil/East"
        | "Brazil/West"
        | "CET"
        | "CST6CDT"
        | "Canada/Atlantic"
        | "Canada/Central"
        | "Canada/Eastern"
        | "Canada/Mountain"
        | "Canada/Newfoundland"
        | "Canada/Pacific"
        | "Canada/Saskatchewan"
        | "Canada/Yukon"
        | "Chile/Continental"
        | "Chile/EasterIsland"
        | "Cuba"
        | "EET"
        | "EST"
        | "EST5EDT"
        | "Egypt"
        | "Eire"
        | "Etc/GMT"
        | "Etc/GMT+0"
        | "Etc/GMT+1"
        | "Etc/GMT+10"
        | "Etc/GMT+11"
        | "Etc/GMT+12"
        | "Etc/GMT+2"
        | "Etc/GMT+3"
        | "Etc/GMT+4"
        | "Etc/GMT+5"
        | "Etc/GMT+6"
        | "Etc/GMT+7"
        | "Etc/GMT+8"
        | "Etc/GMT+9"
        | "Etc/GMT-0"
        | "Etc/GMT-1"
        | "Etc/GMT-10"
        | "Etc/GMT-11"
        | "Etc/GMT-12"
        | "Etc/GMT-13"
        | "Etc/GMT-14"
        | "Etc/GMT-2"
        | "Etc/GMT-3"
        | "Etc/GMT-4"
        | "Etc/GMT-5"
        | "Etc/GMT-6"
        | "Etc/GMT-7"
        | "Etc/GMT-8"
        | "Etc/GMT-9"
        | "Etc/GMT0"
        | "Etc/Greenwich"
        | "Etc/UCT"
        | "Etc/UTC"
        | "Etc/Universal"
        | "Etc/Zulu"
        | "Europe/Amsterdam"
        | "Europe/Andorra"
        | "Europe/Astrakhan"
        | "Europe/Athens"
        | "Europe/Belfast"
        | "Europe/Belgrade"
        | "Europe/Berlin"
        | "Europe/Bratislava"
        | "Europe/Brussels"
        | "Europe/Bucharest"
        | "Europe/Budapest"
        | "Europe/Busingen"
        | "Europe/Chisinau"
        | "Europe/Copenhagen"
        | "Europe/Dublin"
        | "Europe/Gibraltar"
        | "Europe/Guernsey"
        | "Europe/Helsinki"
        | "Europe/Isle_of_Man"
        | "Europe/Istanbul"
        | "Europe/Jersey"
        | "Europe/Kaliningrad"
        | "Europe/Kiev"
        | "Europe/Kirov"
        | "Europe/Lisbon"
        | "Europe/Ljubljana"
        | "Europe/London"
        | "Europe/Luxembourg"
        | "Europe/Madrid"
        | "Europe/Malta"
        | "Europe/Mariehamn"
        | "Europe/Minsk"
        | "Europe/Monaco"
        | "Europe/Moscow"
        | "Europe/Nicosia"
        | "Europe/Oslo"
        | "Europe/Paris"
        | "Europe/Podgorica"
        | "Europe/Prague"
        | "Europe/Riga"
        | "Europe/Rome"
        | "Europe/Samara"
        | "Europe/San_Marino"
        | "Europe/Sarajevo"
        | "Europe/Saratov"
        | "Europe/Simferopol"
        | "Europe/Skopje"
        | "Europe/Sofia"
        | "Europe/Stockholm"
        | "Europe/Tallinn"
        | "Europe/Tirane"
        | "Europe/Tiraspol"
        | "Europe/Ulyanovsk"
        | "Europe/Uzhgorod"
        | "Europe/Vaduz"
        | "Europe/Vatican"
        | "Europe/Vienna"
        | "Europe/Vilnius"
        | "Europe/Volgograd"
        | "Europe/Warsaw"
        | "Europe/Zagreb"
        | "Europe/Zaporozhye"
        | "Europe/Zurich"
        | "Factory"
        | "GB"
        | "GB-Eire"
        | "GMT"
        | "GMT+0"
        | "GMT-0"
        | "GMT0"
        | "Greenwich"
        | "HST"
        | "Hongkong"
        | "Iceland"
        | "Indian/Antananarivo"
        | "Indian/Chagos"
        | "Indian/Christmas"
        | "Indian/Cocos"
        | "Indian/Comoro"
        | "Indian/Kerguelen"
        | "Indian/Mahe"
        | "Indian/Maldives"
        | "Indian/Mauritius"
        | "Indian/Mayotte"
        | "Indian/Reunion"
        | "Iran"
        | "Israel"
        | "Jamaica"
        | "Japan"
        | "Kwajalein"
        | "Libya"
        | "MET"
        | "MST"
        | "MST7MDT"
        | "Mexico/BajaNorte"
        | "Mexico/BajaSur"
        | "Mexico/General"
        | "NZ"
        | "NZ-CHAT"
        | "Navajo"
        | "PRC"
        | "PST8PDT"
        | "Pacific/Apia"
        | "Pacific/Auckland"
        | "Pacific/Bougainville"
        | "Pacific/Chatham"
        | "Pacific/Chuuk"
        | "Pacific/Easter"
        | "Pacific/Efate"
        | "Pacific/Enderbury"
        | "Pacific/Fakaofo"
        | "Pacific/Fiji"
        | "Pacific/Funafuti"
        | "Pacific/Galapagos"
        | "Pacific/Gambier"
        | "Pacific/Guadalcanal"
        | "Pacific/Guam"
        | "Pacific/Honolulu"
        | "Pacific/Johnston"
        | "Pacific/Kiritimati"
        | "Pacific/Kosrae"
        | "Pacific/Kwajalein"
        | "Pacific/Majuro"
        | "Pacific/Marquesas"
        | "Pacific/Midway"
        | "Pacific/Nauru"
        | "Pacific/Niue"
        | "Pacific/Norfolk"
        | "Pacific/Noumea"
        | "Pacific/Pago_Pago"
        | "Pacific/Palau"
        | "Pacific/Pitcairn"
        | "Pacific/Pohnpei"
        | "Pacific/Ponape"
        | "Pacific/Port_Moresby"
        | "Pacific/Rarotonga"
        | "Pacific/Saipan"
        | "Pacific/Samoa"
        | "Pacific/Tahiti"
        | "Pacific/Tarawa"
        | "Pacific/Tongatapu"
        | "Pacific/Truk"
        | "Pacific/Wake"
        | "Pacific/Wallis"
        | "Pacific/Yap"
        | "Poland"
        | "Portugal"
        | "ROC"
        | "ROK"
        | "Singapore"
        | "Turkey"
        | "UCT"
        | "US/Alaska"
        | "US/Aleutian"
        | "US/Arizona"
        | "US/Central"
        | "US/East-Indiana"
        | "US/Eastern"
        | "US/Hawaii"
        | "US/Indiana-Starke"
        | "US/Michigan"
        | "US/Mountain"
        | "US/Pacific"
        | "US/Pacific-New"
        | "US/Samoa"
        | "UTC"
        | "Universal"
        | "W-SU"
        | "WET"
        | "Zulu";
    };
    report_type: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Reporting_report_run;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/reporting/report_runs",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing Report Run. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
 */
export function getReportingReportRunsReportRun(
  reportRun: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Reporting_report_run;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/reporting/report_runs/${reportRun}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a full list of Report Types. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
 */
export function getReportingReportTypes(
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Reporting_report_type[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/reporting/report_types${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the details of a Report Type. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
 */
export function getReportingReportTypesReportType(
  reportType: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Reporting_report_type;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/reporting/report_types/${reportType}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 */
export function getReviews(
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: RadarReview[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/reviews${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves a <code>Review</code> object.</p>
 */
export function getReviewsReview(
  review: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarReview;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/reviews/${review}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>
 */
export function postReviewsReviewApprove(
  review: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: RadarReview;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/reviews/${review}/approve`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of SetupAttempts associated with a provided SetupIntent.</p>
 */
export function getSetupAttempts(
  setupIntent: string,
  body?: {},
  {
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: PaymentFlowsSetupIntentSetupAttempt[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/setup_attempts${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        setup_intent: setupIntent,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of SetupIntents.</p>
 */
export function getSetupIntents(
  body?: {},
  {
    created,
    customer,
    endingBefore,
    expand,
    limit,
    paymentMethod,
    startingAfter,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    paymentMethod?: string;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: SetupIntent[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/setup_intents${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        customer,
        ending_before: endingBefore,
        limit,
        payment_method: paymentMethod,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a SetupIntent object.</p>
 *
 * <p>After the SetupIntent is created, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
 * to collect any required permissions to charge the payment method later.</p>
 */
export function postSetupIntents(
  body?: {
    confirm?: boolean;
    customer?: string;
    description?: string;
    expand?: string[];
    mandate_data?: {
      customer_acceptance: {
        accepted_at?: number;
        offline?: {};
        online?: {
          ip_address: string;
          user_agent: string;
        };
        type: "offline" | "online";
      };
    };
    metadata?: {
      [key: string]: string;
    };
    on_behalf_of?: string;
    payment_method?: string;
    payment_method_options?: {
      card?: {
        request_three_d_secure?: "any" | "automatic";
      };
      sepa_debit?: {
        mandate_options?: {};
      };
    };
    payment_method_types?: string[];
    return_url?: string;
    single_use?: {
      amount: number;
      currency: string;
    };
    usage?: "off_session" | "on_session";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SetupIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/setup_intents",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of a SetupIntent that has previously been created. </p>
 *
 * <p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>
 *
 * <p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#setup_intent_object">SetupIntent</a> object reference for more details.</p>
 */
export function getSetupIntentsIntent(
  intent: string,
  body?: {},
  {
    clientSecret,
    expand,
  }: {
    clientSecret?: string;
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SetupIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/setup_intents/${intent}${QS.query(
      QS.form({
        client_secret: clientSecret,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates a SetupIntent object.</p>
 */
export function postSetupIntentsIntent(
  intent: string,
  body?: {
    customer?: string;
    description?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    payment_method?: string;
    payment_method_options?: {
      card?: {
        request_three_d_secure?: "any" | "automatic";
      };
      sepa_debit?: {
        mandate_options?: {};
      };
    };
    payment_method_types?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SetupIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/setup_intents/${intent}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>A SetupIntent object can be canceled when it is in one of these statuses: <code>requires_payment_method</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>
 *
 * <p>Once canceled, setup is abandoned and any operations on the SetupIntent will fail with an error.</p>
 */
export function postSetupIntentsIntentCancel(
  intent: string,
  body?: {
    cancellation_reason?: "abandoned" | "duplicate" | "requested_by_customer";
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SetupIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/setup_intents/${intent}/cancel`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Confirm that your customer intends to set up the current or
 * provided payment method. For example, you would confirm a SetupIntent
 * when a customer hits the “Save” button on a payment method management
 * page on your website.</p>
 *
 * <p>If the selected payment method does not require any additional
 * steps from the customer, the SetupIntent will transition to the
 * <code>succeeded</code> status.</p>
 *
 * <p>Otherwise, it will transition to the <code>requires_action</code> status and
 * suggest additional actions via <code>next_action</code>. If setup fails,
 * the SetupIntent will transition to the
 * <code>requires_payment_method</code> status.</p>
 */
export function postSetupIntentsIntentConfirm(
  intent: string,
  body?: {
    client_secret?: string;
    expand?: string[];
    mandate_data?:
      | {
          customer_acceptance: {
            accepted_at?: number;
            offline?: {};
            online?: {
              ip_address: string;
              user_agent: string;
            };
            type: "offline" | "online";
          };
        }
      | {
          customer_acceptance: {
            online: {
              ip_address?: string;
              user_agent?: string;
            };
            type: "online";
          };
        };
    payment_method?: string;
    payment_method_options?: {
      card?: {
        request_three_d_secure?: "any" | "automatic";
      };
      sepa_debit?: {
        mandate_options?: {};
      };
    };
    return_url?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SetupIntent;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/setup_intents/${intent}/confirm`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of scheduled query runs.</p>
 */
export function getSigmaScheduledQueryRuns(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: ScheduledQueryRun[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/sigma/scheduled_query_runs${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an scheduled query run.</p>
 */
export function getSigmaScheduledQueryRunsScheduledQueryRun(
  scheduledQueryRun: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: ScheduledQueryRun;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/sigma/scheduled_query_runs/${scheduledQueryRun}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.</p>
 */
export function getSkus(
  body?: {},
  {
    active,
    attributes,
    endingBefore,
    expand,
    ids,
    inStock,
    limit,
    product,
    startingAfter,
  }: {
    active?: boolean;
    attributes?: {
      [key: string]: string;
    };
    endingBefore?: string;
    expand?: string[];
    ids?: string[];
    inStock?: boolean;
    limit?: number;
    product?: string;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Sku[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/skus${QS.query(
      QS.form({
        active,
        ending_before: endingBefore,
        in_stock: inStock,
        limit,
        product,
        starting_after: startingAfter,
      }),
      QS.deep({
        attributes,
        expand,
        ids,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new SKU associated with a product.</p>
 */
export function postSkus(
  body: {
    active?: boolean;
    attributes?: {
      [key: string]: string;
    };
    currency: string;
    expand?: string[];
    id?: string;
    image?: string;
    inventory: {
      quantity?: number;
      type: "bucket" | "finite" | "infinite";
      value?: "" | "in_stock" | "limited" | "out_of_stock";
    };
    metadata?: {
      [key: string]: string;
    };
    package_dimensions?: {
      height: number;
      length: number;
      weight: number;
      width: number;
    };
    price: number;
    product: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Sku;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/skus",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Delete a SKU. Deleting a SKU is only possible until it has been used in an order.</p>
 */
export function deleteSkusId(
  id: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedSku;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/skus/${id}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.</p>
 */
export function getSkusId(
  id: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Sku | DeletedSku;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/skus/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 *
 * <p>Note that a SKU’s <code>attributes</code> are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.</p>
 */
export function postSkusId(
  id: string,
  body?: {
    active?: boolean;
    attributes?: {
      [key: string]: string;
    };
    currency?: string;
    expand?: string[];
    image?: string;
    inventory?: {
      quantity?: number;
      type?: "bucket" | "finite" | "infinite";
      value?: "" | "in_stock" | "limited" | "out_of_stock";
    };
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    package_dimensions?:
      | {
          height: number;
          length: number;
          weight: number;
          width: number;
        }
      | "";
    price?: number;
    product?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Sku;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/skus/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Creates a new source object.</p>
 */
export function postSources(
  body?: {
    amount?: number;
    currency?: string;
    customer?: string;
    expand?: string[];
    flow?: "code_verification" | "none" | "receiver" | "redirect";
    mandate?: {
      acceptance?: {
        date?: number;
        ip?: string;
        offline?: {
          contact_email: string;
        };
        online?: {
          date?: number;
          ip?: string;
          user_agent?: string;
        };
        status: "accepted" | "pending" | "refused" | "revoked";
        type?: "offline" | "online";
        user_agent?: string;
      };
      amount?: number | "";
      currency?: string;
      interval?: "one_time" | "scheduled" | "variable";
      notification_method?:
        | "deprecated_none"
        | "email"
        | "manual"
        | "none"
        | "stripe_email";
    };
    metadata?: {
      [key: string]: string;
    };
    original_source?: string;
    owner?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      email?: string;
      name?: string;
      phone?: string;
    };
    receiver?: {
      refund_attributes_method?: "email" | "manual" | "none";
    };
    redirect?: {
      return_url: string;
    };
    source_order?: {
      items?: {
        amount?: number;
        currency?: string;
        description?: string;
        parent?: string;
        quantity?: number;
        type?: "discount" | "shipping" | "sku" | "tax";
      }[];
      shipping?: {
        address: {
          city?: string;
          country?: string;
          line1: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        };
        carrier?: string;
        name?: string;
        phone?: string;
        tracking_number?: string;
      };
    };
    statement_descriptor?: string;
    token?: string;
    type?: string;
    usage?: "reusable" | "single_use";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Source;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/sources",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>
 */
export function getSourcesSource(
  source: string,
  body?: {},
  {
    clientSecret,
    expand,
  }: {
    clientSecret?: string;
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Source;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/sources/${source}${QS.query(
      QS.form({
        client_secret: clientSecret,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 *
 * <p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>
 */
export function postSourcesSource(
  source: string,
  body?: {
    amount?: number;
    expand?: string[];
    mandate?: {
      acceptance?: {
        date?: number;
        ip?: string;
        offline?: {
          contact_email: string;
        };
        online?: {
          date?: number;
          ip?: string;
          user_agent?: string;
        };
        status: "accepted" | "pending" | "refused" | "revoked";
        type?: "offline" | "online";
        user_agent?: string;
      };
      amount?: number | "";
      currency?: string;
      interval?: "one_time" | "scheduled" | "variable";
      notification_method?:
        | "deprecated_none"
        | "email"
        | "manual"
        | "none"
        | "stripe_email";
    };
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    owner?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      email?: string;
      name?: string;
      phone?: string;
    };
    source_order?: {
      items?: {
        amount?: number;
        currency?: string;
        description?: string;
        parent?: string;
        quantity?: number;
        type?: "discount" | "shipping" | "sku" | "tax";
      }[];
      shipping?: {
        address: {
          city?: string;
          country?: string;
          line1: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        };
        carrier?: string;
        name?: string;
        phone?: string;
        tracking_number?: string;
      };
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Source;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/sources/${source}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves a new Source MandateNotification.</p>
 */
export function getSourcesSourceMandateNotificationsMandateNotification(
  mandateNotification: string,
  source: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SourceMandateNotification;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/sources/${source}/mandate_notifications/${mandateNotification}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>List source transactions for a given source.</p>
 */
export function getSourcesSourceSourceTransactions(
  source: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: SourceTransaction[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/sources/${source}/source_transactions${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>
 */
export function getSourcesSourceSourceTransactionsSourceTransaction(
  source: string,
  sourceTransaction: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SourceTransaction;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/sources/${source}/source_transactions/${sourceTransaction}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Verify a given source.</p>
 */
export function postSourcesSourceVerify(
  source: string,
  body: {
    expand?: string[];
    values: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Source;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/sources/${source}/verify`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your subscription items for a given subscription.</p>
 */
export function getSubscriptionItems(
  subscription: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: SubscriptionItem[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_items${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        subscription,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>
 */
export function postSubscriptionItems(
  body: {
    billing_thresholds?:
      | {
          usage_gte: number;
        }
      | "";
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    payment_behavior?:
      | "allow_incomplete"
      | "error_if_incomplete"
      | "pending_if_incomplete";
    price?: string;
    price_data?: {
      currency: string;
      product: string;
      recurring: {
        interval: "day" | "month" | "week" | "year";
        interval_count?: number;
      };
      unit_amount?: number;
      unit_amount_decimal?: string;
    };
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
    proration_date?: number;
    quantity?: number;
    subscription: string;
    tax_rates?: string[] | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SubscriptionItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/subscription_items",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>
 */
export function deleteSubscriptionItemsItem(
  item: string,
  body?: {
    clear_usage?: boolean;
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
    proration_date?: number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedSubscriptionItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_items/${item}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the subscription item with the given ID.</p>
 */
export function getSubscriptionItemsItem(
  item: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SubscriptionItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_items/${item}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the plan or quantity of an item on a current subscription.</p>
 */
export function postSubscriptionItemsItem(
  item: string,
  body?: {
    billing_thresholds?:
      | {
          usage_gte: number;
        }
      | "";
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    off_session?: boolean;
    payment_behavior?:
      | "allow_incomplete"
      | "error_if_incomplete"
      | "pending_if_incomplete";
    price?: string;
    price_data?: {
      currency: string;
      product: string;
      recurring: {
        interval: "day" | "month" | "week" | "year";
        interval_count?: number;
      };
      unit_amount?: number;
      unit_amount_decimal?: string;
    };
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
    proration_date?: number;
    quantity?: number;
    tax_rates?: string[] | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SubscriptionItem;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_items/${item}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>For the specified subscription item, returns a list of summary objects. Each object in the list provides usage information that’s been summarized from multiple usage records and over a subscription billing period (e.g., 15 usage records in the month of September).</p>
 *
 * <p>The list is sorted in reverse-chronological order (newest first). The first list item represents the most current usage period that hasn’t ended yet. Since new usage records can still be added, the returned summary information for the subscription item’s ID should be seen as unstable until the subscription billing period ends.</p>
 */
export function getSubscriptionItemsSubscriptionItemUsageRecordSummaries(
  subscriptionItem: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: UsageRecordSummary[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_items/${subscriptionItem}/usage_record_summaries${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a usage record for a specified subscription item and date, and fills it with a quantity.</p>
 *
 * <p>Usage records provide <code>quantity</code> information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the <a href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered billing</a> plan, Stripe helps you send accurate invoices to your customers.</p>
 *
 * <p>The default calculation for usage is to add up all the <code>quantity</code> values of the usage records within a billing period. You can change this default behavior with the billing plan’s <code>aggregate_usage</code> <a href="/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>. When there is more than one usage record with the same timestamp, Stripe adds the <code>quantity</code> values together. In most cases, this is the desired resolution, however, you can change this behavior with the <code>action</code> parameter.</p>
 *
 * <p>The default pricing model for metered billing is <a href="/docs/api/plans/object#plan_object-billing_scheme">per-unit pricing</a>. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing</a> model.</p>
 */
export function postSubscriptionItemsSubscriptionItemUsageRecords(
  subscriptionItem: string,
  body: {
    action?: "increment" | "set";
    expand?: string[];
    quantity: number;
    timestamp: number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: UsageRecord;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_items/${subscriptionItem}/usage_records`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the list of your subscription schedules.</p>
 */
export function getSubscriptionSchedules(
  body?: {},
  {
    canceledAt,
    completedAt,
    created,
    customer,
    endingBefore,
    expand,
    limit,
    releasedAt,
    scheduled,
    startingAfter,
  }: {
    canceledAt?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    completedAt?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    releasedAt?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    scheduled?: boolean;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: SubscriptionSchedule[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_schedules${QS.query(
      QS.deep({
        canceled_at: canceledAt,
        completed_at: completedAt,
        created,
        expand,
        released_at: releasedAt,
      }),
      QS.form({
        customer,
        ending_before: endingBefore,
        limit,
        scheduled,
        starting_after: startingAfter,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p>
 */
export function postSubscriptionSchedules(
  body?: {
    customer?: string;
    default_settings?: {
      billing_cycle_anchor?: "automatic" | "phase_start";
      billing_thresholds?:
        | {
            amount_gte?: number;
            reset_billing_cycle_anchor?: boolean;
          }
        | "";
      collection_method?: "charge_automatically" | "send_invoice";
      default_payment_method?: string;
      invoice_settings?: {
        days_until_due?: number;
      };
      transfer_data?:
        | {
            amount_percent?: number;
            destination: string;
          }
        | "";
    };
    end_behavior?: "cancel" | "none" | "release" | "renew";
    expand?: string[];
    from_subscription?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    phases?: {
      add_invoice_items?: {
        price?: string;
        price_data?: {
          currency: string;
          product: string;
          unit_amount?: number;
          unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
      }[];
      application_fee_percent?: number;
      billing_cycle_anchor?: "automatic" | "phase_start";
      billing_thresholds?:
        | {
            amount_gte?: number;
            reset_billing_cycle_anchor?: boolean;
          }
        | "";
      collection_method?: "charge_automatically" | "send_invoice";
      coupon?: string;
      default_payment_method?: string;
      default_tax_rates?: string[] | "";
      end_date?: number;
      invoice_settings?: {
        days_until_due?: number;
      };
      items: {
        billing_thresholds?:
          | {
              usage_gte: number;
            }
          | "";
        price?: string;
        price_data?: {
          currency: string;
          product: string;
          recurring: {
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
          };
          unit_amount?: number;
          unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
      }[];
      iterations?: number;
      proration_behavior?: "always_invoice" | "create_prorations" | "none";
      transfer_data?: {
        amount_percent?: number;
        destination: string;
      };
      trial?: boolean;
      trial_end?: number;
    }[];
    start_date?: number | "now";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SubscriptionSchedule;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/subscription_schedules",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>
 */
export function getSubscriptionSchedulesSchedule(
  schedule: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SubscriptionSchedule;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_schedules/${schedule}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing subscription schedule.</p>
 */
export function postSubscriptionSchedulesSchedule(
  schedule: string,
  body?: {
    default_settings?: {
      billing_cycle_anchor?: "automatic" | "phase_start";
      billing_thresholds?:
        | {
            amount_gte?: number;
            reset_billing_cycle_anchor?: boolean;
          }
        | "";
      collection_method?: "charge_automatically" | "send_invoice";
      default_payment_method?: string;
      invoice_settings?: {
        days_until_due?: number;
      };
      transfer_data?:
        | {
            amount_percent?: number;
            destination: string;
          }
        | "";
    };
    end_behavior?: "cancel" | "none" | "release" | "renew";
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    phases?: {
      add_invoice_items?: {
        price?: string;
        price_data?: {
          currency: string;
          product: string;
          unit_amount?: number;
          unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
      }[];
      application_fee_percent?: number;
      billing_cycle_anchor?: "automatic" | "phase_start";
      billing_thresholds?:
        | {
            amount_gte?: number;
            reset_billing_cycle_anchor?: boolean;
          }
        | "";
      collection_method?: "charge_automatically" | "send_invoice";
      coupon?: string;
      default_payment_method?: string;
      default_tax_rates?: string[] | "";
      end_date?: number | "now";
      invoice_settings?: {
        days_until_due?: number;
      };
      items: {
        billing_thresholds?:
          | {
              usage_gte: number;
            }
          | "";
        price?: string;
        price_data?: {
          currency: string;
          product: string;
          recurring: {
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
          };
          unit_amount?: number;
          unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
      }[];
      iterations?: number;
      proration_behavior?: "always_invoice" | "create_prorations" | "none";
      start_date?: number | "now";
      transfer_data?: {
        amount_percent?: number;
        destination: string;
      };
      trial?: boolean;
      trial_end?: number | "now";
    }[];
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SubscriptionSchedule;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_schedules/${schedule}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>
 */
export function postSubscriptionSchedulesScheduleCancel(
  schedule: string,
  body?: {
    expand?: string[];
    invoice_now?: boolean;
    prorate?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SubscriptionSchedule;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_schedules/${schedule}/cancel`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>
 */
export function postSubscriptionSchedulesScheduleRelease(
  schedule: string,
  body?: {
    expand?: string[];
    preserve_cancel_date?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: SubscriptionSchedule;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscription_schedules/${schedule}/release`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>
 */
export function getSubscriptions(
  body?: {},
  {
    collectionMethod,
    created,
    currentPeriodEnd,
    currentPeriodStart,
    customer,
    endingBefore,
    expand,
    limit,
    price,
    startingAfter,
    status,
  }: {
    collectionMethod?: "charge_automatically" | "send_invoice";
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    currentPeriodEnd?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    currentPeriodStart?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    customer?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    price?: string;
    startingAfter?: string;
    status?:
      | "active"
      | "all"
      | "canceled"
      | "ended"
      | "incomplete"
      | "incomplete_expired"
      | "past_due"
      | "trialing"
      | "unpaid";
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Subscription[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscriptions${QS.query(
      QS.form({
        collection_method: collectionMethod,
        customer,
        ending_before: endingBefore,
        limit,
        price,
        starting_after: startingAfter,
        status,
      }),
      QS.deep({
        created,
        current_period_end: currentPeriodEnd,
        current_period_start: currentPeriodStart,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.</p>
 */
export function postSubscriptions(
  body: {
    add_invoice_items?: {
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    application_fee_percent?: number;
    backdate_start_date?: number;
    billing_cycle_anchor?: number;
    billing_thresholds?:
      | {
          amount_gte?: number;
          reset_billing_cycle_anchor?: boolean;
        }
      | "";
    cancel_at?: number;
    cancel_at_period_end?: boolean;
    collection_method?: "charge_automatically" | "send_invoice";
    coupon?: string;
    customer: string;
    days_until_due?: number;
    default_payment_method?: string;
    default_source?: string;
    default_tax_rates?: string[] | "";
    expand?: string[];
    items?: {
      billing_thresholds?:
        | {
            usage_gte: number;
          }
        | "";
      metadata?: {
        [key: string]: string;
      };
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        recurring: {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        };
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    off_session?: boolean;
    payment_behavior?:
      | "allow_incomplete"
      | "error_if_incomplete"
      | "pending_if_incomplete";
    pending_invoice_item_interval?:
      | {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        }
      | "";
    promotion_code?: string;
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
    transfer_data?: {
      amount_percent?: number;
      destination: string;
    };
    trial_end?: "now" | number;
    trial_from_plan?: boolean;
    trial_period_days?: number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Subscription;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/subscriptions",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Cancels a customer’s subscription immediately. The customer will not be charged again for the subscription.</p>
 *
 * <p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>
 *
 * <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
 */
export function deleteSubscriptionsSubscriptionExposedId(
  subscriptionExposedId: string,
  body?: {
    expand?: string[];
    invoice_now?: boolean;
    prorate?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Subscription;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscriptions/${subscriptionExposedId}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the subscription with the given ID.</p>
 */
export function getSubscriptionsSubscriptionExposedId(
  subscriptionExposedId: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Subscription;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscriptions/${subscriptionExposedId}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>
 */
export function postSubscriptionsSubscriptionExposedId(
  subscriptionExposedId: string,
  body?: {
    add_invoice_items?: {
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    application_fee_percent?: number;
    billing_cycle_anchor?: "now" | "unchanged";
    billing_thresholds?:
      | {
          amount_gte?: number;
          reset_billing_cycle_anchor?: boolean;
        }
      | "";
    cancel_at?: number | "";
    cancel_at_period_end?: boolean;
    collection_method?: "charge_automatically" | "send_invoice";
    coupon?: string;
    days_until_due?: number;
    default_payment_method?: string;
    default_source?: string;
    default_tax_rates?: string[] | "";
    expand?: string[];
    items?: {
      billing_thresholds?:
        | {
            usage_gte: number;
          }
        | "";
      clear_usage?: boolean;
      deleted?: boolean;
      id?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        recurring: {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        };
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    off_session?: boolean;
    pause_collection?:
      | {
          behavior: "keep_as_draft" | "mark_uncollectible" | "void";
          resumes_at?: number;
        }
      | "";
    payment_behavior?:
      | "allow_incomplete"
      | "error_if_incomplete"
      | "pending_if_incomplete";
    pending_invoice_item_interval?:
      | {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        }
      | "";
    promotion_code?: string;
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
    proration_date?: number;
    transfer_data?:
      | {
          amount_percent?: number;
          destination: string;
        }
      | "";
    trial_end?: "now" | number;
    trial_from_plan?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Subscription;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscriptions/${subscriptionExposedId}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Removes the currently applied discount on a subscription.</p>
 */
export function deleteSubscriptionsSubscriptionExposedIdDiscount(
  subscriptionExposedId: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: DeletedDiscount;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/subscriptions/${subscriptionExposedId}/discount`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>
 */
export function getTaxRates(
  body?: {},
  {
    active,
    created,
    endingBefore,
    expand,
    inclusive,
    limit,
    startingAfter,
  }: {
    active?: boolean;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    inclusive?: boolean;
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: TaxRate[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/tax_rates${QS.query(
      QS.form({
        active,
        ending_before: endingBefore,
        inclusive,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        created,
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new tax rate.</p>
 */
export function postTaxRates(
  body: {
    active?: boolean;
    description?: string;
    display_name: string;
    expand?: string[];
    inclusive: boolean;
    jurisdiction?: string;
    metadata?: {
      [key: string]: string;
    };
    percentage: number;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TaxRate;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/tax_rates",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves a tax rate with the given ID</p>
 */
export function getTaxRatesTaxRate(
  taxRate: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TaxRate;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/tax_rates/${taxRate}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates an existing tax rate.</p>
 */
export function postTaxRatesTaxRate(
  taxRate: string,
  body?: {
    active?: boolean;
    description?: string;
    display_name?: string;
    expand?: string[];
    jurisdiction?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TaxRate;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/tax_rates/${taxRate}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>
 */
export function postTerminalConnectionTokens(
  body?: {
    expand?: string[];
    location?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalConnectionToken;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/terminal/connection_tokens",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of <code>Location</code> objects.</p>
 */
export function getTerminalLocations(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: TerminalLocationLocation[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/terminal/locations${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new <code>Location</code> object.</p>
 */
export function postTerminalLocations(
  body: {
    address: {
      city?: string;
      country: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    display_name: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalLocationLocation;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/terminal/locations",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes a <code>Location</code> object.</p>
 */
export function deleteTerminalLocationsLocation(
  location: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalLocationDeletedLocation;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/terminal/locations/${location}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves a <code>Location</code> object.</p>
 */
export function getTerminalLocationsLocation(
  location: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalLocationLocation;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/terminal/locations/${location}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postTerminalLocationsLocation(
  location: string,
  body?: {
    address?: {
      city?: string;
      country: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    display_name?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalLocationLocation;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/terminal/locations/${location}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of <code>Reader</code> objects.</p>
 */
export function getTerminalReaders(
  body?: {},
  {
    deviceType,
    endingBefore,
    expand,
    limit,
    location,
    startingAfter,
    status,
  }: {
    deviceType?: "bbpos_chipper2x" | "verifone_P400";
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    location?: string;
    startingAfter?: string;
    status?: "offline" | "online";
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: TerminalReaderReader[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/terminal/readers${QS.query(
      QS.form({
        device_type: deviceType,
        ending_before: endingBefore,
        limit,
        location,
        starting_after: startingAfter,
        status,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Creates a new <code>Reader</code> object.</p>
 */
export function postTerminalReaders(
  body: {
    expand?: string[];
    label?: string;
    location?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    registration_code: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalReaderReader;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/terminal/readers",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Deletes a <code>Reader</code> object.</p>
 */
export function deleteTerminalReadersReader(
  reader: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalReaderDeletedReader;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/terminal/readers/${reader}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves a <code>Reader</code> object.</p>
 */
export function getTerminalReadersReader(
  reader: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalReaderReader;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/terminal/readers/${reader}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export function postTerminalReadersReader(
  reader: string,
  body?: {
    expand?: string[];
    label?: string;
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TerminalReaderReader;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/terminal/readers/${reader}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Creates a single-use token that represents a bank account’s details.
 * This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a <a href="#accounts">Custom account</a>.</p>
 */
export function postTokens(
  body?: {
    account?: {
      business_type?:
        | "company"
        | "government_entity"
        | "individual"
        | "non_profit";
      company?: {
        address?: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        };
        address_kana?: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
          town?: string;
        };
        address_kanji?: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
          town?: string;
        };
        directors_provided?: boolean;
        executives_provided?: boolean;
        name?: string;
        name_kana?: string;
        name_kanji?: string;
        owners_provided?: boolean;
        phone?: string;
        registration_number?: string;
        structure?:
          | ""
          | "government_instrumentality"
          | "governmental_unit"
          | "incorporated_non_profit"
          | "limited_liability_partnership"
          | "multi_member_llc"
          | "private_company"
          | "private_corporation"
          | "private_partnership"
          | "public_company"
          | "public_corporation"
          | "public_partnership"
          | "sole_proprietorship"
          | "tax_exempt_government_instrumentality"
          | "unincorporated_association"
          | "unincorporated_non_profit";
        tax_id?: string;
        tax_id_registrar?: string;
        vat_id?: string;
        verification?: {
          document?: {
            back?: string;
            front?: string;
          };
        };
      };
      individual?: {
        address?: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        };
        address_kana?: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
          town?: string;
        };
        address_kanji?: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
          town?: string;
        };
        dob?:
          | {
              day: number;
              month: number;
              year: number;
            }
          | "";
        email?: string;
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?:
          | {
              [key: string]: string;
            }
          | "";
        phone?: string;
        political_exposure?: "existing" | "none";
        ssn_last_4?: string;
        verification?: {
          additional_document?: {
            back?: string;
            front?: string;
          };
          document?: {
            back?: string;
            front?: string;
          };
        };
      };
      tos_shown_and_accepted?: boolean;
    };
    bank_account?: {
      account_holder_name?: string;
      account_holder_type?: "company" | "individual";
      account_number: string;
      country: string;
      currency?: string;
      routing_number?: string;
    };
    card?:
      | {
          address_city?: string;
          address_country?: string;
          address_line1?: string;
          address_line2?: string;
          address_state?: string;
          address_zip?: string;
          currency?: string;
          cvc?: string;
          exp_month: string;
          exp_year: string;
          name?: string;
          number: string;
        }
      | string;
    customer?: string;
    cvc_update?: {
      cvc: string;
    };
    expand?: string[];
    person?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      address_kana?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      address_kanji?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
        town?: string;
      };
      dob?:
        | {
            day: number;
            month: number;
            year: number;
          }
        | "";
      email?: string;
      first_name?: string;
      first_name_kana?: string;
      first_name_kanji?: string;
      gender?: string;
      id_number?: string;
      last_name?: string;
      last_name_kana?: string;
      last_name_kanji?: string;
      maiden_name?: string;
      metadata?:
        | {
            [key: string]: string;
          }
        | "";
      phone?: string;
      political_exposure?: string;
      relationship?: {
        director?: boolean;
        executive?: boolean;
        owner?: boolean;
        percent_ownership?: number | "";
        representative?: boolean;
        title?: string;
      };
      ssn_last_4?: string;
      verification?: {
        additional_document?: {
          back?: string;
          front?: string;
        };
        document?: {
          back?: string;
          front?: string;
        };
      };
    };
    pii?: {
      id_number?: string;
    };
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Token;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/tokens",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the token with the given ID.</p>
 */
export function getTokensToken(
  token: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Token;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/tokens/${token}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Returns a list of top-ups.</p>
 */
export function getTopups(
  body?: {},
  {
    amount,
    created,
    endingBefore,
    expand,
    limit,
    startingAfter,
    status,
  }: {
    amount?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    status?: "canceled" | "failed" | "pending" | "succeeded";
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Topup[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/topups${QS.query(
      QS.deep({
        amount,
        created,
        expand,
      }),
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        status,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Top up the balance of an account</p>
 */
export function postTopups(
  body: {
    amount: number;
    currency: string;
    description?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    source?: string;
    statement_descriptor?: string;
    transfer_group?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Topup;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/topups",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>
 */
export function getTopupsTopup(
  topup: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Topup;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/topups/${topup}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>
 */
export function postTopupsTopup(
  topup: string,
  body?: {
    description?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Topup;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/topups/${topup}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Cancels a top-up. Only pending top-ups can be canceled.</p>
 */
export function postTopupsTopupCancel(
  topup: string,
  body?: {
    expand?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Topup;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/topups/${topup}/cancel`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>
 */
export function getTransfers(
  body?: {},
  {
    created,
    destination,
    endingBefore,
    expand,
    limit,
    startingAfter,
    transferGroup,
  }: {
    created?:
      | {
          gt?: number;
          gte?: number;
          lt?: number;
          lte?: number;
        }
      | number;
    destination?: string;
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
    transferGroup?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: Transfer[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/transfers${QS.query(
      QS.deep({
        created,
        expand,
      }),
      QS.form({
        destination,
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
        transfer_group: transferGroup,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you’ll receive an “Insufficient Funds” error.</p>
 */
export function postTransfers(
  body: {
    amount?: number;
    currency: string;
    description?: string;
    destination: string;
    expand?: string[];
    metadata?: {
      [key: string]: string;
    };
    source_transaction?: string;
    source_type?: "bank_account" | "card" | "fpx";
    transfer_group?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Transfer;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/transfers",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>
 */
export function getTransfersIdReversals(
  id: string,
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: TransferReversal[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/transfers/${id}/reversals${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>When you create a new reversal, you must specify a transfer to create it on.</p>
 *
 * <p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>
 *
 * <p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>
 */
export function postTransfersIdReversals(
  id: string,
  body?: {
    amount?: number;
    description?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    refund_application_fee?: boolean;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TransferReversal;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/transfers/${id}/reversals`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>
 */
export function getTransfersTransfer(
  transfer: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Transfer;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/transfers/${transfer}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 *
 * <p>This request accepts only metadata as an argument.</p>
 */
export function postTransfersTransfer(
  transfer: string,
  body?: {
    description?: string;
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: Transfer;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/transfers/${transfer}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>
 */
export function getTransfersTransferReversalsId(
  id: string,
  transfer: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TransferReversal;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/transfers/${transfer}/reversals/${id}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 *
 * <p>This request only accepts metadata and description as arguments.</p>
 */
export function postTransfersTransferReversalsId(
  id: string,
  transfer: string,
  body?: {
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: TransferReversal;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/transfers/${transfer}/reversals/${id}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>Returns a list of your webhook endpoints.</p>
 */
export function getWebhookEndpoints(
  body?: {},
  {
    endingBefore,
    expand,
    limit,
    startingAfter,
  }: {
    endingBefore?: string;
    expand?: string[];
    limit?: number;
    startingAfter?: string;
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: {
          data: NotificationWebhookEndpoint[];
          has_more: boolean;
          object: "list";
          url: string;
        };
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/webhook_endpoints${QS.query(
      QS.form({
        ending_before: endingBefore,
        limit,
        starting_after: startingAfter,
      }),
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>
 */
export function postWebhookEndpoints(
  body: {
    api_version?:
      | "2011-01-01"
      | "2011-06-21"
      | "2011-06-28"
      | "2011-08-01"
      | "2011-09-15"
      | "2011-11-17"
      | "2012-02-23"
      | "2012-03-25"
      | "2012-06-18"
      | "2012-06-28"
      | "2012-07-09"
      | "2012-09-24"
      | "2012-10-26"
      | "2012-11-07"
      | "2013-02-11"
      | "2013-02-13"
      | "2013-07-05"
      | "2013-08-12"
      | "2013-08-13"
      | "2013-10-29"
      | "2013-12-03"
      | "2014-01-31"
      | "2014-03-13"
      | "2014-03-28"
      | "2014-05-19"
      | "2014-06-13"
      | "2014-06-17"
      | "2014-07-22"
      | "2014-07-26"
      | "2014-08-04"
      | "2014-08-20"
      | "2014-09-08"
      | "2014-10-07"
      | "2014-11-05"
      | "2014-11-20"
      | "2014-12-08"
      | "2014-12-17"
      | "2014-12-22"
      | "2015-01-11"
      | "2015-01-26"
      | "2015-02-10"
      | "2015-02-16"
      | "2015-02-18"
      | "2015-03-24"
      | "2015-04-07"
      | "2015-06-15"
      | "2015-07-07"
      | "2015-07-13"
      | "2015-07-28"
      | "2015-08-07"
      | "2015-08-19"
      | "2015-09-03"
      | "2015-09-08"
      | "2015-09-23"
      | "2015-10-01"
      | "2015-10-12"
      | "2015-10-16"
      | "2016-02-03"
      | "2016-02-19"
      | "2016-02-22"
      | "2016-02-23"
      | "2016-02-29"
      | "2016-03-07"
      | "2016-06-15"
      | "2016-07-06"
      | "2016-10-19"
      | "2017-01-27"
      | "2017-02-14"
      | "2017-04-06"
      | "2017-05-25"
      | "2017-06-05"
      | "2017-08-15"
      | "2017-12-14"
      | "2018-01-23"
      | "2018-02-05"
      | "2018-02-06"
      | "2018-02-28"
      | "2018-05-21"
      | "2018-07-27"
      | "2018-08-23"
      | "2018-09-06"
      | "2018-09-24"
      | "2018-10-31"
      | "2018-11-08"
      | "2019-02-11"
      | "2019-02-19"
      | "2019-03-14"
      | "2019-05-16"
      | "2019-08-14"
      | "2019-09-09"
      | "2019-10-08"
      | "2019-10-17"
      | "2019-11-05"
      | "2019-12-03"
      | "2020-03-02"
      | "2020-08-27";
    connect?: boolean;
    description?: string;
    enabled_events: (
      | "*"
      | "account.application.authorized"
      | "account.application.deauthorized"
      | "account.external_account.created"
      | "account.external_account.deleted"
      | "account.external_account.updated"
      | "account.updated"
      | "application_fee.created"
      | "application_fee.refund.updated"
      | "application_fee.refunded"
      | "balance.available"
      | "capability.updated"
      | "charge.captured"
      | "charge.dispute.closed"
      | "charge.dispute.created"
      | "charge.dispute.funds_reinstated"
      | "charge.dispute.funds_withdrawn"
      | "charge.dispute.updated"
      | "charge.expired"
      | "charge.failed"
      | "charge.pending"
      | "charge.refund.updated"
      | "charge.refunded"
      | "charge.succeeded"
      | "charge.updated"
      | "checkout.session.async_payment_failed"
      | "checkout.session.async_payment_succeeded"
      | "checkout.session.completed"
      | "coupon.created"
      | "coupon.deleted"
      | "coupon.updated"
      | "credit_note.created"
      | "credit_note.updated"
      | "credit_note.voided"
      | "customer.created"
      | "customer.deleted"
      | "customer.discount.created"
      | "customer.discount.deleted"
      | "customer.discount.updated"
      | "customer.source.created"
      | "customer.source.deleted"
      | "customer.source.expiring"
      | "customer.source.updated"
      | "customer.subscription.created"
      | "customer.subscription.deleted"
      | "customer.subscription.pending_update_applied"
      | "customer.subscription.pending_update_expired"
      | "customer.subscription.trial_will_end"
      | "customer.subscription.updated"
      | "customer.tax_id.created"
      | "customer.tax_id.deleted"
      | "customer.tax_id.updated"
      | "customer.updated"
      | "file.created"
      | "invoice.created"
      | "invoice.deleted"
      | "invoice.finalization_failed"
      | "invoice.finalized"
      | "invoice.marked_uncollectible"
      | "invoice.paid"
      | "invoice.payment_action_required"
      | "invoice.payment_failed"
      | "invoice.payment_succeeded"
      | "invoice.sent"
      | "invoice.upcoming"
      | "invoice.updated"
      | "invoice.voided"
      | "invoiceitem.created"
      | "invoiceitem.deleted"
      | "invoiceitem.updated"
      | "issuing_authorization.created"
      | "issuing_authorization.request"
      | "issuing_authorization.updated"
      | "issuing_card.created"
      | "issuing_card.updated"
      | "issuing_cardholder.created"
      | "issuing_cardholder.updated"
      | "issuing_dispute.closed"
      | "issuing_dispute.created"
      | "issuing_dispute.funds_reinstated"
      | "issuing_dispute.submitted"
      | "issuing_dispute.updated"
      | "issuing_transaction.created"
      | "issuing_transaction.updated"
      | "mandate.updated"
      | "order.created"
      | "order.payment_failed"
      | "order.payment_succeeded"
      | "order.updated"
      | "order_return.created"
      | "payment_intent.amount_capturable_updated"
      | "payment_intent.canceled"
      | "payment_intent.created"
      | "payment_intent.payment_failed"
      | "payment_intent.processing"
      | "payment_intent.requires_action"
      | "payment_intent.succeeded"
      | "payment_method.attached"
      | "payment_method.automatically_updated"
      | "payment_method.detached"
      | "payment_method.updated"
      | "payout.canceled"
      | "payout.created"
      | "payout.failed"
      | "payout.paid"
      | "payout.updated"
      | "person.created"
      | "person.deleted"
      | "person.updated"
      | "plan.created"
      | "plan.deleted"
      | "plan.updated"
      | "price.created"
      | "price.deleted"
      | "price.updated"
      | "product.created"
      | "product.deleted"
      | "product.updated"
      | "promotion_code.created"
      | "promotion_code.updated"
      | "radar.early_fraud_warning.created"
      | "radar.early_fraud_warning.updated"
      | "recipient.created"
      | "recipient.deleted"
      | "recipient.updated"
      | "reporting.report_run.failed"
      | "reporting.report_run.succeeded"
      | "reporting.report_type.updated"
      | "review.closed"
      | "review.opened"
      | "setup_intent.canceled"
      | "setup_intent.created"
      | "setup_intent.requires_action"
      | "setup_intent.setup_failed"
      | "setup_intent.succeeded"
      | "sigma.scheduled_query_run.created"
      | "sku.created"
      | "sku.deleted"
      | "sku.updated"
      | "source.canceled"
      | "source.chargeable"
      | "source.failed"
      | "source.mandate_notification"
      | "source.refund_attributes_required"
      | "source.transaction.created"
      | "source.transaction.updated"
      | "subscription_schedule.aborted"
      | "subscription_schedule.canceled"
      | "subscription_schedule.completed"
      | "subscription_schedule.created"
      | "subscription_schedule.expiring"
      | "subscription_schedule.released"
      | "subscription_schedule.updated"
      | "tax_rate.created"
      | "tax_rate.updated"
      | "topup.canceled"
      | "topup.created"
      | "topup.failed"
      | "topup.reversed"
      | "topup.succeeded"
      | "transfer.created"
      | "transfer.failed"
      | "transfer.paid"
      | "transfer.reversed"
      | "transfer.updated"
    )[];
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    url: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: NotificationWebhookEndpoint;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    "/v1/webhook_endpoints",
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
/**
 * <p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>
 */
export function deleteWebhookEndpointsWebhookEndpoint(
  webhookEndpoint: string,
  body?: {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: NotificationWebhookEndpointDeleted;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/webhook_endpoints/${webhookEndpoint}`,
    oazapfts.form({
      ...opts,
      method: "DELETE",
      body,
    })
  );
}
/**
 * <p>Retrieves the webhook endpoint with the given ID.</p>
 */
export function getWebhookEndpointsWebhookEndpoint(
  webhookEndpoint: string,
  body?: {},
  {
    expand,
  }: {
    expand?: string[];
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: NotificationWebhookEndpoint;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/webhook_endpoints/${webhookEndpoint}${QS.query(
      QS.deep({
        expand,
      })
    )}`,
    oazapfts.form({
      ...opts,
      body,
    })
  );
}
/**
 * <p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>
 */
export function postWebhookEndpointsWebhookEndpoint(
  webhookEndpoint: string,
  body?: {
    description?: string;
    disabled?: boolean;
    enabled_events?: (
      | "*"
      | "account.application.authorized"
      | "account.application.deauthorized"
      | "account.external_account.created"
      | "account.external_account.deleted"
      | "account.external_account.updated"
      | "account.updated"
      | "application_fee.created"
      | "application_fee.refund.updated"
      | "application_fee.refunded"
      | "balance.available"
      | "capability.updated"
      | "charge.captured"
      | "charge.dispute.closed"
      | "charge.dispute.created"
      | "charge.dispute.funds_reinstated"
      | "charge.dispute.funds_withdrawn"
      | "charge.dispute.updated"
      | "charge.expired"
      | "charge.failed"
      | "charge.pending"
      | "charge.refund.updated"
      | "charge.refunded"
      | "charge.succeeded"
      | "charge.updated"
      | "checkout.session.async_payment_failed"
      | "checkout.session.async_payment_succeeded"
      | "checkout.session.completed"
      | "coupon.created"
      | "coupon.deleted"
      | "coupon.updated"
      | "credit_note.created"
      | "credit_note.updated"
      | "credit_note.voided"
      | "customer.created"
      | "customer.deleted"
      | "customer.discount.created"
      | "customer.discount.deleted"
      | "customer.discount.updated"
      | "customer.source.created"
      | "customer.source.deleted"
      | "customer.source.expiring"
      | "customer.source.updated"
      | "customer.subscription.created"
      | "customer.subscription.deleted"
      | "customer.subscription.pending_update_applied"
      | "customer.subscription.pending_update_expired"
      | "customer.subscription.trial_will_end"
      | "customer.subscription.updated"
      | "customer.tax_id.created"
      | "customer.tax_id.deleted"
      | "customer.tax_id.updated"
      | "customer.updated"
      | "file.created"
      | "invoice.created"
      | "invoice.deleted"
      | "invoice.finalization_failed"
      | "invoice.finalized"
      | "invoice.marked_uncollectible"
      | "invoice.paid"
      | "invoice.payment_action_required"
      | "invoice.payment_failed"
      | "invoice.payment_succeeded"
      | "invoice.sent"
      | "invoice.upcoming"
      | "invoice.updated"
      | "invoice.voided"
      | "invoiceitem.created"
      | "invoiceitem.deleted"
      | "invoiceitem.updated"
      | "issuing_authorization.created"
      | "issuing_authorization.request"
      | "issuing_authorization.updated"
      | "issuing_card.created"
      | "issuing_card.updated"
      | "issuing_cardholder.created"
      | "issuing_cardholder.updated"
      | "issuing_dispute.closed"
      | "issuing_dispute.created"
      | "issuing_dispute.funds_reinstated"
      | "issuing_dispute.submitted"
      | "issuing_dispute.updated"
      | "issuing_transaction.created"
      | "issuing_transaction.updated"
      | "mandate.updated"
      | "order.created"
      | "order.payment_failed"
      | "order.payment_succeeded"
      | "order.updated"
      | "order_return.created"
      | "payment_intent.amount_capturable_updated"
      | "payment_intent.canceled"
      | "payment_intent.created"
      | "payment_intent.payment_failed"
      | "payment_intent.processing"
      | "payment_intent.requires_action"
      | "payment_intent.succeeded"
      | "payment_method.attached"
      | "payment_method.automatically_updated"
      | "payment_method.detached"
      | "payment_method.updated"
      | "payout.canceled"
      | "payout.created"
      | "payout.failed"
      | "payout.paid"
      | "payout.updated"
      | "person.created"
      | "person.deleted"
      | "person.updated"
      | "plan.created"
      | "plan.deleted"
      | "plan.updated"
      | "price.created"
      | "price.deleted"
      | "price.updated"
      | "product.created"
      | "product.deleted"
      | "product.updated"
      | "promotion_code.created"
      | "promotion_code.updated"
      | "radar.early_fraud_warning.created"
      | "radar.early_fraud_warning.updated"
      | "recipient.created"
      | "recipient.deleted"
      | "recipient.updated"
      | "reporting.report_run.failed"
      | "reporting.report_run.succeeded"
      | "reporting.report_type.updated"
      | "review.closed"
      | "review.opened"
      | "setup_intent.canceled"
      | "setup_intent.created"
      | "setup_intent.requires_action"
      | "setup_intent.setup_failed"
      | "setup_intent.succeeded"
      | "sigma.scheduled_query_run.created"
      | "sku.created"
      | "sku.deleted"
      | "sku.updated"
      | "source.canceled"
      | "source.chargeable"
      | "source.failed"
      | "source.mandate_notification"
      | "source.refund_attributes_required"
      | "source.transaction.created"
      | "source.transaction.updated"
      | "subscription_schedule.aborted"
      | "subscription_schedule.canceled"
      | "subscription_schedule.completed"
      | "subscription_schedule.created"
      | "subscription_schedule.expiring"
      | "subscription_schedule.released"
      | "subscription_schedule.updated"
      | "tax_rate.created"
      | "tax_rate.updated"
      | "topup.canceled"
      | "topup.created"
      | "topup.failed"
      | "topup.reversed"
      | "topup.succeeded"
      | "transfer.created"
      | "transfer.failed"
      | "transfer.paid"
      | "transfer.reversed"
      | "transfer.updated"
    )[];
    expand?: string[];
    metadata?:
      | {
          [key: string]: string;
        }
      | "";
    url?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<
    | {
        status: 200;
        data: NotificationWebhookEndpoint;
      }
    | {
        status: number;
        data: Error;
      }
  >(
    `/v1/webhook_endpoints/${webhookEndpoint}`,
    oazapfts.form({
      ...opts,
      method: "POST",
      body,
    })
  );
}
