---
title: Amazon Cost Analysis - TSO
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Amazon Cost Analysis - TSO'
		lineageTag: d5b42258-1355-491f-81c2-249c2cbcfbc9

		measure Total_m = SUM('Amazon Cost Analysis - TSO'[total])
			lineageTag: 339b2c3c-330d-4e04-9976-f93941a38ba7

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		measure 'Amazon Fees, Credits, etc.' = SUM('Amazon Cost Analysis - TSO'[fba_fees])+SUM('Amazon Cost Analysis - TSO'[gift_wrap_credits])+SUM('Amazon Cost Analysis - TSO'[other])+SUM('Amazon Cost Analysis - TSO'[other_transaction_fees])+SUM('Amazon Cost Analysis - TSO'[promotional_rebates])+SUM('Amazon Cost Analysis - TSO'[selling_fees])+SUM('Amazon Cost Analysis - TSO'[shipping_credits])
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: c8dc847f-5ace-431c-8af9-f50c86a46ec1

		measure 'July Fees, Credits, etc.' = CALCULATE(SUM('Sales Invoice Line'[Amount]),FILTER('Sales Invoice Line','Sales Invoice Line'[External Document No.]="07.2023 MISSED AMAZON ACTIVITY"))
			lineageTag: 7f2aa5c6-f770-441e-9be8-9ccabb6ca23d

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column date_time
			dataType: dateTime
			formatString: mm/dd/yyyy
			lineageTag: c301fc21-aabb-4f32-aef1-9c303ceffbd0
			summarizeBy: none
			sourceColumn: date_time

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

			annotation UnderlyingDateTimeDataType = Date

		column type
			dataType: string
			lineageTag: 5adc0ae4-3262-409e-a447-68d53ec10167
			summarizeBy: none
			sourceColumn: type

			annotation SummarizationSetBy = Automatic

		column order_id
			dataType: string
			lineageTag: 9d3b083d-4383-4582-b30d-3420b7beafb4
			summarizeBy: none
			sourceColumn: order_id

			annotation SummarizationSetBy = Automatic

		column sku
			dataType: string
			lineageTag: f9db8fe5-1804-40b1-98fa-2abafcc4a0f2
			summarizeBy: none
			sourceColumn: sku

			annotation SummarizationSetBy = Automatic

		column quantity
			dataType: int64
			formatString: #,0
			lineageTag: 987b7f37-69a5-451c-bed1-66e2334c33a2
			summarizeBy: sum
			sourceColumn: quantity

			changedProperty = DataType

			annotation SummarizationSetBy = Automatic

		column product_sales
			dataType: double
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 42812e54-970d-4539-9fdd-ce248f93fca5
			summarizeBy: sum
			sourceColumn: product_sales

			annotation SummarizationSetBy = Automatic

		column total
			dataType: double
			formatString: \$#,0.###############;(\$#,0.###############);\$#,0.###############
			lineageTag: 7395e41a-5755-4213-b2a2-c866832a0902
			summarizeBy: sum
			sourceColumn: total

			annotation SummarizationSetBy = Automatic

		column 'REV SKU' = LOOKUPVALUE('Item$16a'[No_],'Item$16a'[Amazon SKU],'Amazon Cost Analysis - TSO'[sku],"Amazon SKU not in NAV")
			lineageTag: 58bae0a2-685d-484b-8f53-025e03668068
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column ASIN = LOOKUPVALUE(inventory_all_listings[asin1],inventory_all_listings[seller_sku],'Amazon Cost Analysis - TSO'[sku],"Deleted from Amazon or Duplicate")
			lineageTag: 523d1b22-39f2-4006-b83f-781b1098df45
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column asin_nav = LOOKUPVALUE('Item'[ASIN],'Item'[No_],'Amazon Cost Analysis - TSO'[REV SKU],"REV SKU not in NAV")
			lineageTag: c24e7927-ba18-43d8-beb8-e93d5d8cbe8c
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'COGS from NAV' = IF('Amazon Cost Analysis - TSO'[REV SKU]="Amazon SKU not in NAV",9999,IF(CALCULATE(SUM('Sales Invoice Line'[Unit Cost]),FILTER('Sales Invoice Line','Sales Invoice Line'[Item No_ and Order ID Key]='Amazon Cost Analysis - TSO'[sku and Order ID]))=BLANK(),LOOKUPVALUE('Item Card'[Unit Cost],'Item Card'[No.],'Amazon Cost Analysis - TSO'[REV SKU]),CALCULATE(SUM('Sales Invoice Line'[Unit Cost]),FILTER('Sales Invoice Line','Sales Invoice Line'[Item No_ and Order ID Key]='Amazon Cost Analysis - TSO'[sku and Order ID]))))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 6605c21d-9a8c-4fee-8d2a-8e47699bf21a
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'sku and Order ID' = CONCATENATE('Amazon Cost Analysis - TSO'[REV SKU],'Amazon Cost Analysis - TSO'[order_id])
			lineageTag: eaf7094d-8ea0-45a7-80a3-d392cdd2c198
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column shipping_credits
			dataType: double
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 2f46a6d1-cef0-41e8-bcdf-6e1c9c52b4db
			summarizeBy: sum
			sourceColumn: shipping_credits

			annotation SummarizationSetBy = Automatic

		column gift_wrap_credits
			dataType: double
			lineageTag: 797dc621-c074-4fb6-ab8c-0687b8f70621
			summarizeBy: sum
			sourceColumn: gift_wrap_credits

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column promotional_rebates
			dataType: double
			lineageTag: ecd8d17b-a949-4f22-a1c7-5c17850c9c9e
			summarizeBy: sum
			sourceColumn: promotional_rebates

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column sales_tax_collected
			dataType: double
			lineageTag: 6862da27-5a85-40cd-8140-b113817dde4e
			summarizeBy: sum
			sourceColumn: sales_tax_collected

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column marketplace_facilitator_tax
			dataType: double
			lineageTag: ba27e1f3-cb4f-4c0e-a9ed-d60a07f2010f
			summarizeBy: sum
			sourceColumn: marketplace_facilitator_tax

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column selling_fees
			dataType: double
			lineageTag: e765ab85-2bd9-43ac-bbe1-78163da1972c
			summarizeBy: sum
			sourceColumn: selling_fees

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column fba_fees
			dataType: double
			lineageTag: 099a626c-96d9-4bc4-854c-098a8e3b1231
			summarizeBy: sum
			sourceColumn: fba_fees

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column other_transaction_fees
			dataType: double
			lineageTag: 4f1aa98e-4339-4af2-8dc3-d1948b73634e
			summarizeBy: sum
			sourceColumn: other_transaction_fees

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column other
			dataType: double
			lineageTag: 7c82b293-0e44-4fb3-99f4-a64a4550f0b5
			summarizeBy: sum
			sourceColumn: other

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Net Total' = IF('Amazon Cost Analysis - TSO'[type]="Refund",'Amazon Cost Analysis - TSO'[total]+'Amazon Cost Analysis - TSO'[COGS from NAV],'Amazon Cost Analysis - TSO'[total]-'Amazon Cost Analysis - TSO'[COGS from NAV])
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: a96347e0-73df-4e5f-9421-809de5046b36
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Sales from NAV' = CALCULATE(SUM('Sales Invoice Line'[Amount]),FILTER('Sales Invoice Line','Sales Invoice Line'[No_]='Amazon Cost Analysis - TSO'[REV SKU]),FILTER('Sales Invoice Line','Sales Invoice Line'[Order ID]='Amazon Cost Analysis - TSO'[order_id]))-CALCULATE(SUM('Sales Invoice Line'[Amount]),FILTER('Sales Invoice Line','Sales Invoice Line'[No_]="FREIGHT"),FILTER('Sales Invoice Line','Sales Invoice Line'[Order ID]='Amazon Cost Analysis - TSO'[order_id]))
			lineageTag: f1985fbc-0dd6-43d9-8ebb-6a7dd7f7bf01
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'NAV ASINs' = IF('Amazon Cost Analysis - TSO'[asin_nav]="Rev sku not in Nav","Check these ASINs","Good to Go")
			lineageTag: 57539284-0e9b-47e0-8d04-dfe968bfbadb
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'Quantity from NAV' = CALCULATE(SUM('Sales Invoice Line'[Quantity]),FILTER('Sales Invoice Line','Sales Invoice Line'[No_]='Amazon Cost Analysis - TSO'[REV SKU]),FILTER('Sales Invoice Line','Sales Invoice Line'[Order ID]='Amazon Cost Analysis - TSO'[order_id]))
			dataType: int64
			lineageTag: a2b525d9-e796-48f9-bf49-4fcdc4ee380c
			summarizeBy: sum

			changedProperty = DataType

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Ad Spend' = CALCULATE(SUM(ads_sponsored_products_advertised_product[spend]),FILTER(ads_sponsored_products_advertised_product,ads_sponsored_products_advertised_product[advertised_asin]='Amazon Cost Analysis - TSO'[ASIN]),FILTER(ads_sponsored_products_advertised_product,ads_sponsored_products_advertised_product[date]='Amazon Cost Analysis - TSO'[date_time]))
			lineageTag: d9a8a44d-62ca-4b3b-b330-33119c3ccd2a
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Ad Spend Per Quantity Per Day' = 'Amazon Cost Analysis - TSO'[Ad Spend]/'Amazon Cost Analysis - TSO'[Quantity from NAV]
			lineageTag: 7d109430-44bf-41ae-a58d-8e42634d6c2c
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column description
			dataType: string
			lineageTag: d044e156-b006-4d93-aacf-a55dd70375ce
			summarizeBy: none
			sourceColumn: description

			annotation SummarizationSetBy = Automatic

		column 'Adjustment Quantity' = IF('Amazon Cost Analysis - TSO'[total]<0,'Amazon Cost Analysis - TSO'[quantity]*(-1),'Amazon Cost Analysis - TSO'[quantity])
			formatString: 0
			lineageTag: 2d87b891-27a1-4a9e-b130-af3ac5bd4798
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column id
			dataType: int64
			formatString: 0
			lineageTag: 95efaec4-6e12-4228-aa84-d1bb7782ac8d
			summarizeBy: sum
			sourceColumn: id

			annotation SummarizationSetBy = Automatic

		column _created_on
			dataType: dateTime
			formatString: General Date
			lineageTag: 1556583e-b0a5-4d61-8170-ff6ec6d070d2
			summarizeBy: none
			sourceColumn: _created_on

			variation Variation
				isDefault
				relationship: fe6b483e-f82a-4745-912f-13ce517b8aee
				defaultHierarchy: LocalDateTable_84e369ed-66a7-4159-94f7-4c403952aadc.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column _last_updated_on
			dataType: dateTime
			formatString: General Date
			lineageTag: 66908fd0-8044-4926-89ad-450f93c11c66
			summarizeBy: none
			sourceColumn: _last_updated_on

			variation Variation
				isDefault
				relationship: 0695613b-cda3-4b8d-b2e4-40aaa38cdfa4
				defaultHierarchy: LocalDateTable_3afce2f1-eb83-4322-ba89-b2a0d8f87164.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column _revision
			dataType: int64
			formatString: 0
			lineageTag: c57f10e6-7d61-4ead-923d-6d468d7b6bbe
			summarizeBy: sum
			sourceColumn: _revision

			annotation SummarizationSetBy = Automatic

		column _row_index
			dataType: double
			lineageTag: cd0f8d79-476a-4b86-aebe-c7c3a2218228
			summarizeBy: sum
			sourceColumn: _row_index

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		partition 'Amazon Cost Analysis - TSO' = m
			mode: import
			source =
					let
					    Source = Odbc.DataSource("dsn=WAP", [HierarchicalNavigation=true]),
					    #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database" = Source{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data],
					    public_Schema = #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database"{[Name="public",Kind="Schema"]}[Data],
					    transactions_standard_orders_View = public_Schema{[Name="transactions_standard_orders",Kind="View"]}[Data],
					    #"Changed Type" = Table.TransformColumnTypes(transactions_standard_orders_View,{{"date_time", type date}}),
					    #"Filtered Rows" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNMonths([date_time], 3) or Date.IsInCurrentMonth([date_time])),
					    #"Removed Columns1" = Table.RemoveColumns(#"Filtered Rows",{"settlement_id"}),
					    #"Removed Columns2" = Table.RemoveColumns(#"Removed Columns1",{"marketplace", "fulfillment", "order_city", "order_state", "order_postal", "_partneruuid", "marketplace_withheld_tax", "account_type", "product_sales_tax", "shipping_credits_tax", "giftwrap_credits_tax", "promotional_rebates_tax", "tax_collection_model"}),
					    #"Sorted Rows" = Table.Sort(#"Removed Columns2",{{"date_time", Order.Ascending}}),
					    #"Changed Type1" = Table.TransformColumnTypes(#"Sorted Rows",{{"date_time", type date}}),
					    #"Sorted Rows1" = Table.Sort(#"Changed Type1",{{"date_time", Order.Descending}})
					in
					    #"Sorted Rows1"

		annotation PBI_ResultType = Table

		annotation PBI_NavigationStepName = Navigation
```
