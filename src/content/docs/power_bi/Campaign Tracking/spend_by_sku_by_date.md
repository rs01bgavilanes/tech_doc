---
title: Spend by SKU by Date
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'SKU Orders by Date - Main Table'
		lineageTag: 748efcf0-1563-4e45-8492-e57dd931ca30

		measure 'Profit Per Unit Sold_' = IF(SUM('SKU Orders by Date - Main Table'[Net Unit Sales])=0,0,SUM('SKU Orders by Date - Main Table'[Profit])/SUM('SKU Orders by Date - Main Table'[Net Unit Sales]))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: ba5c06a4-6d70-41c1-b327-c7de0a99955f

		measure 'Profit %_' = IF(SUM('SKU Orders by Date - Main Table'[Sales])=0,0,SUM('SKU Orders by Date - Main Table'[Profit])/SUM('SKU Orders by Date - Main Table'[Sales]))
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 0d465a98-ae8a-42b2-bd76-520b6a18b484

		measure 'total Amazon fees' =
				
				VAR other_=CALCULATE(SUM('SKU Orders by Date - Main Table'[Other]),FILTER('SKU Orders by Date - Main Table','SKU Orders by Date - Main Table'[Other]<0))
				RETURN SUM('SKU Orders by Date - Main Table'[FBA Fees])+SUM('SKU Orders by Date - Main Table'[Selling Fees])+SUM('SKU Orders by Date - Main Table'[Gift Wrap Credits])+SUM('SKU Orders by Date - Main Table'[Other Transaction Fees])+other_+SUM('SKU Orders by Date - Main Table'[Shipping Credits])+SUM('SKU Orders by Date - Main Table'[Promotional Rebates])
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 5eb0caa4-28ee-45ab-9e1a-04d99e00196a

		measure 'Profit Measure' = ROUND(SUM('SKU Orders by Date - Main Table'[Sales])+[total Amazon fees]-SUM('SKU Orders by Date - Main Table'[Unit Cost])-SUM('SKU Orders by Date - Main Table'[Ad Spend]),2)
			formatString: \$#,0.###############;(\$#,0.###############);\$#,0.###############
			lineageTag: 82b5d649-3ecb-4b3c-b537-ef9d86416623

		measure 'Forecast 10160 - M' = 1
			lineageTag: 6a13355f-d730-4f64-8e62-9167159fe786

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column date
			dataType: dateTime
			formatString: mm/dd/yyyy
			lineageTag: e433ef90-cc5a-488b-af24-7238da094106
			summarizeBy: none
			sourceColumn: date

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'REV SKU' =
				
				IF(LOOKUPVALUE('Item'[No_],'Item'[ASIN],'SKU Orders by Date - Main Table'[Item.ASIN])=BLANK(),LOOKUPVALUE('Item'[No_],'Item'[SFP],'SKU Orders by Date - Main Table'[sku]),LOOKUPVALUE('Item'[No_],'Item'[ASIN],'SKU Orders by Date - Main Table'[Item.ASIN]))
			lineageTag: a24362cb-31c6-498c-a19d-dab08d5fbedc
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column ASIN = IF('SKU Orders by Date - Main Table'[Item.ASIN]=BLANK(),LOOKUPVALUE('Item'[ASIN],'Item'[SFP],'SKU Orders by Date - Main Table'[sku],'SKU Orders by Date - Main Table'[Item.ASIN]),'SKU Orders by Date - Main Table'[Item.ASIN])
			lineageTag: dcc86b8e-d261-4f98-8658-329e06487a83
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'Unit Cost' =
				
				IF(OR('SKU Orders by Date - Main Table'[Item.ASIN]=BLANK(),'SKU Orders by Date - Main Table'[Total]=0)=TRUE(),0,
				    IF(CALCULATE(SUM('Sales Invoice Line'[Unit Cost]),FILTER('Sales Invoice Line','Sales Invoice Line'[No_]='SKU Orders by Date - Main Table'[REV SKU]),FILTER('Sales Invoice Line','Sales Invoice Line'[Sales Invoice Header.Posting Date]='SKU Orders by Date - Main Table'[date]))=BLANK(),
				        LOOKUPVALUE('Item Card'[Adjusted Unit Cost],'Item Card'[No.],'SKU Orders by Date - Main Table'[REV SKU])-CALCULATE(SUM('Sales Credit Memo Line'[Total Cost]),FILTER('Sales Credit Memo Line','Sales Credit Memo Line'[No_]='SKU Orders by Date - Main Table'[REV SKU]),FILTER('Sales Credit Memo Line','Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date]='SKU Orders by Date - Main Table'[date])),
				        CALCULATE(SUM('Sales Invoice Line'[Unit Cost]),FILTER('Sales Invoice Line','Sales Invoice Line'[No_]='SKU Orders by Date - Main Table'[REV SKU]),FILTER('Sales Invoice Line','Sales Invoice Line'[Sales Invoice Header.Posting Date]='SKU Orders by Date - Main Table'[date]))-CALCULATE(SUM('Sales Credit Memo Line'[Total Cost]),FILTER('Sales Credit Memo Line','Sales Credit Memo Line'[No_]='SKU Orders by Date - Main Table'[REV SKU]),FILTER('Sales Credit Memo Line','Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date]='SKU Orders by Date - Main Table'[date]))))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 759b91ce-294d-4e93-bf15-1e958b352149
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column Sales = ```
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
				VAR calc_adj = CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[product_sales]=0),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[total]>0))
				RETURN 
				    IF(has_dup>1,
				        IF(calc+calc_adj=BLANK(),0,ROUND((calc+calc_adj)/has_dup,2)),
				        IF(calc+calc_adj=BLANK(),0,calc+calc_adj))
				
				```
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: e9b35011-6aa1-4ac7-b304-fd3547fb931c
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Net Unit Sales' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR orders_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
				VAR returns_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"))
				VAR adjustments_=IF(
				        CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))<0,
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))*(-1),
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment")))
				RETURN IF(has_dup>1,ROUND((orders_-returns_+adjustments_)/has_dup,0),orders_-returns_+adjustments_)
			formatString: #,0
			lineageTag: e6d02a94-e6ec-464b-bfa7-8c4e81cec49d
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Shipping Credits' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[shipping_credits]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]))
				RETURN IF(has_dup>1,
				    IF(calc=BLANK(),0,ROUND(calc/has_dup,2)),
				    IF(calc=BLANK(),0,calc)
				)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 8884b4e1-45e1-4c3e-bdef-9c2bd67802b2
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Gift Wrap Credits' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[gift_wrap_credits]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]))
				RETURN IF(has_dup>1,
				    IF(calc=BLANK(),0,ROUND(calc/has_dup,2)),
				    IF(calc=BLANK(),0,calc)
				)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 3a22487a-25bc-4dfb-a108-b16cdb727409
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Promotional Rebates' =
				
				VAR has_dup=CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[promotional_rebates]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]))
				RETURN IF(has_dup>1,
				    IF(calc=BLANK(),0,ROUND(calc/has_dup,2)),
				    IF(calc=BLANK(),0,calc)
				)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: a7958c2a-0b8c-490b-91c6-2534d22c8143
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Selling Fees' =
				
				VAR has_dup=CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[selling_fees]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]))
				RETURN IF(has_dup>1,
				    IF(calc=BLANK(),0,ROUND(calc/has_dup,2)),
				    IF(calc=BLANK(),0,calc)
				)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 7cf353b2-e99e-434f-a115-50953c7917a2
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'FBA Fees' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[fba_fees]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]))
				RETURN IF(has_dup>1,
				    IF(calc=BLANK(),0,ROUND(calc/has_dup,2)),
				    IF(calc=BLANK(),0,calc)
				)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 998a7edf-3e76-4910-89e2-722431837b07
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Other Transaction Fees' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[other_transaction_fees]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]))
				RETURN IF(has_dup>1,
				    IF(calc=BLANK(),0,ROUND(calc/has_dup,2)),
				    IF(calc=BLANK(),0,calc)
				)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: f4cadfb6-9829-4feb-9cca-6ed05ce7b836
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column Other =
				
				VAR has_dup=CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[other]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]))
				RETURN IF(has_dup>1,
				    IF(calc=BLANK(),0,ROUND(calc/has_dup,2)),
				    IF(calc=BLANK(),0,calc)
				)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 59723fce-b911-4a62-8ab7-003eddcd0781
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column Total =
				
				VAR has_dup=CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]))
				RETURN IF(has_dup>1,
				    IF(calc=BLANK(),0,ROUND(calc/has_dup,2)),
				    IF(calc=BLANK(),0,calc)
				)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 1a8ed6fc-aa09-4967-84a5-7c6eeab650ae
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Check' = 'SKU Orders by Date - Main Table'[Sales]+'SKU Orders by Date - Main Table'[Shipping Credits]+'SKU Orders by Date - Main Table'[Promotional Rebates]+'SKU Orders by Date - Main Table'[Selling Fees]+'SKU Orders by Date - Main Table'[FBA Fees]+'SKU Orders by Date - Main Table'[Other Transaction Fees]+'SKU Orders by Date - Main Table'[Other]
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: c352006f-bd99-4ea0-9b8a-e6087e0fcb2f
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Ad Spend' = ```
				
				    IF(LEFT('SKU Orders by Date - Main Table'[sku],4)="amzn",0,
				        IF(CALCULATE(SUM(ads_sponsored_products_advertised_product[spend]),FILTER(ads_sponsored_products_advertised_product,ads_sponsored_products_advertised_product[date]='SKU Orders by Date - Main Table'[date]),FILTER(ads_sponsored_products_advertised_product,ads_sponsored_products_advertised_product[advertised_sku]='SKU Orders by Date - Main Table'[sku]))=BLANK(),0,CALCULATE(SUM(ads_sponsored_products_advertised_product[spend]),FILTER(ads_sponsored_products_advertised_product,ads_sponsored_products_advertised_product[date]='SKU Orders by Date - Main Table'[date]),FILTER(ads_sponsored_products_advertised_product,ads_sponsored_products_advertised_product[advertised_sku]='SKU Orders by Date - Main Table'[sku]))))
				```
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: d789e49a-1f1f-42b3-bc45-a7a64b57a9ae
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column Profit = ROUND('SKU Orders by Date - Main Table'[Total]-'SKU Orders by Date - Main Table'[Unit Cost]-'SKU Orders by Date - Main Table'[Ad Spend],2)
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 668d2440-72d8-4775-911c-dccb65a52c93
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Profit Per Unit Sold' = IF('SKU Orders by Date - Main Table'[Net Unit Sales]=0,0,'SKU Orders by Date - Main Table'[Profit]/'SKU Orders by Date - Main Table'[Net Unit Sales])
			formatString: 0.00
			lineageTag: 8d52b2b3-50a2-43d9-bd65-791a303fa4bb
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Price' = 1
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 1ad3e75f-ad1c-4731-8f59-72e51dc2216c
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Missing Spend'
			dataType: double
			lineageTag: b49a2e0a-07cb-4c5d-a781-d883c8ef2162
			summarizeBy: sum
			sourceColumn: Missing Spend

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Sales (NAV)' = CALCULATE(SUM('Sales Invoice Line'[Amount]),FILTER('Sales Invoice Line','Sales Invoice Line'[No_]='SKU Orders by Date - Main Table'[REV SKU]),FILTER('Sales Invoice Line','Sales Invoice Line'[Sales Invoice Header.Posting Date]='SKU Orders by Date - Main Table'[date]))
			lineageTag: 08a2c0da-8d11-4716-80bc-089d3f78b586
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Week Of' = 'SKU Orders by Date - Main Table'[date]-WEEKDAY('SKU Orders by Date - Main Table'[date],2)+1
			formatString: mm/dd/yy
			lineageTag: c40239c5-8b01-4576-80aa-2617e4dfee01
			summarizeBy: none

			variation Variation
				isDefault
				relationship: 973b4fec-de9e-496d-819e-c4ec2c4ed069
				defaultHierarchy: LocalDateTable_effe1696-1bff-4d04-814c-17eeddde7fd1.'Date Hierarchy'

			changedProperty = DataType

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column sku
			dataType: string
			lineageTag: 6a973b2f-6cec-41cc-8b5b-c5064542df5d
			summarizeBy: none
			sourceColumn: sku

			annotation SummarizationSetBy = Automatic

		column Adjustments =
				IF(CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Customer Service Issue"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Damaged:Warehouse"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Lost:Warehouse"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - General Adjustment"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Customer Return"))=BLANK(),0,
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Customer Service Issue"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Damaged:Warehouse"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Lost:Warehouse"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - General Adjustment"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Customer Return")))
			lineageTag: 90c09e2d-084e-491e-aad2-17f6dc51725a
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Item.ASIN'
			dataType: string
			lineageTag: 09e6103a-c670-4f4f-80ee-d4b75309181c
			summarizeBy: none
			sourceColumn: Item.ASIN

			annotation SummarizationSetBy = Automatic

		column 'Profit %' = IF(OR('SKU Orders by Date - Main Table'[Sales]=0,'SKU Orders by Date - Main Table'[Sales]=BLANK())=TRUE(),0,'SKU Orders by Date - Main Table'[Profit]/'SKU Orders by Date - Main Table'[Sales])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 14b69022-8c0a-4e04-b1dc-a8fee428c069
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Sales_' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR orders_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
				RETURN IF(has_dup>1,ROUND(orders_/has_dup,0),orders_)
			formatString: #,0
			lineageTag: 1ae06a3a-ce1b-4e2c-a482-89fb921af3b0
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Returns_' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR returns_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"))
				RETURN IF(has_dup>1,ROUND(returns_/has_dup,0),returns_)
			formatString: #,0
			lineageTag: 79d4378d-920d-4961-ab52-16f7eae6ff6e
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Adjustments*' =
				IF(
				        CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))<0,
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))*(-1),
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment")))
			formatString: #,0
			lineageTag: bfcf040a-bc46-4c59-b566-2d869212f556
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Adjustments_' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR adjustments_=IF(
				        CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))<0,
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))*(-1),
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment")))
				RETURN IF(has_dup>1,ROUND(adjustments_/has_dup,0),adjustments_)
			formatString: 0
			lineageTag: d3a6a180-d217-41ee-a109-ccf8ce1067ae
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column Adjustments_ =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR adjustments_= CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))
				RETURN IF(has_dup>1,ROUND(adjustments_/has_dup,0),adjustments_)
			lineageTag: 0b1bbdff-2e2a-4349-b6ce-57f3fb9d16a6
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Net Sales' = ```
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
				VAR calc_adj = CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[product_sales]=0),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[total]>0))
				VAR calc_ret = CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]))
				RETURN 
				    IF(has_dup>1,
				        IF(calc+calc_adj+calc_ret=BLANK(),0,ROUND((calc+calc_adj+calc_ret)/has_dup,2)),
				        IF(calc+calc_adj+calc_ret=BLANK(),0,calc+calc_adj+calc_ret))
				
				```
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: b999dde2-49c9-4c81-9464-703ef38f1c9f
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Orders**' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR orders_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
				VAR returns_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"))
				VAR adjustments_=IF(
				        CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))<0,
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))*(-1),
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment")))
				RETURN IF(has_dup>1,ROUND((orders_)/has_dup,0),orders_)
			formatString: #,0
			lineageTag: f6240737-68fc-4c55-b06d-08525a476b7e
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Returns**' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR orders_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
				VAR returns_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"))
				VAR adjustments_=IF(
				        CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))<0,
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))*(-1),
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment")))
				RETURN IF(has_dup>1,ROUND((returns_)/has_dup,0),returns_)
			formatString: #,0
			lineageTag: 66b2d233-f147-404a-9335-4d4ed21cf993
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Postitive Unit Adjustments**' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR orders_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
				VAR returns_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"))
				VAR adjustments_=IF(
				        CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))<0,
				            0,
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment")))
				RETURN IF(has_dup>1,ROUND((adjustments_)/has_dup,0),adjustments_)
			formatString: #,0
			lineageTag: a4b56f1e-7b80-4a9c-b0b5-cd16773d3435
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Negative Unit Adjustments**' =
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR orders_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
				VAR returns_=CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"))
				VAR adjustments_=IF(
				        CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))<0,
				            CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"))*(-1),
				            0)
				RETURN IF(has_dup>1,ROUND((adjustments_)/has_dup,0),adjustments_)
			dataType: int64
			lineageTag: a074696a-0410-4c2e-8b2d-1986a3dd05b5
			summarizeBy: sum

			changedProperty = DataType

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Pos. Sales' = ```
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[product_sales]>0))
				RETURN 
				    IF(has_dup>1,
				        IF(calc=BLANK(),0,ROUND((calc)/has_dup,2)),
				        IF(calc=BLANK(),0,calc))
				
				```
			lineageTag: 0ad8fcde-c821-4432-a73a-c95b8171a1e4
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Neg. Sales' = ```
				
				VAR has_dup = CALCULATE(COUNTA(returns_fba_inventory[asin]),FILTER(returns_fba_inventory,returns_fba_inventory[asin]='SKU Orders by Date - Main Table'[Item.ASIN]))
				VAR calc = CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='SKU Orders by Date - Main Table'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[date_time]='SKU Orders by Date - Main Table'[date]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[product_sales]<0))
				RETURN 
				    IF(has_dup>1,
				        IF(calc=BLANK(),0,ROUND((calc)/has_dup,2)),
				        IF(calc=BLANK(),0,calc))
				
				```
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: fe9d63f2-6476-4d9b-a6f3-2af0397b9c1b
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Forecast Toggle' = IF(AND('SKU Orders by Date - Main Table'[Forecast 10160]<>BLANK(),'SKU Orders by Date - Main Table'[Forecast 10165]=BLANK()),"10160",IF(AND('SKU Orders by Date - Main Table'[Forecast 10160]=BLANK(),'SKU Orders by Date - Main Table'[Forecast 10165]<>BLANK()),"10165",IF(AND('SKU Orders by Date - Main Table'[Forecast 10160]<>BLANK(),'SKU Orders by Date - Main Table'[Forecast 10165]<>BLANK()),"Both 10160 & 10165",IF(AND('SKU Orders by Date - Main Table'[Forecast 10160]=BLANK(),'SKU Orders by Date - Main Table'[Forecast 10165]=BLANK()),"No FC"))))
			lineageTag: 342dbe5e-5969-4621-b36b-06d182ef5287
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'Forecast 10160' = CALCULATE(SUM('Customer Forecast'[Quantity]),FILTER('Customer Forecast',MONTH('Customer Forecast'[Starting Date])=MONTH('SKU Orders by Date - Main Table'[date])),FILTER('Customer Forecast',YEAR('Customer Forecast'[Starting Date])=YEAR('SKU Orders by Date - Main Table'[date])),FILTER('Customer Forecast','Customer Forecast'[Item No_]='SKU Orders by Date - Main Table'[REV SKU]),FILTER('Customer Forecast','Customer Forecast'[Customer No_]="10160"))
			formatString: 0
			lineageTag: bea1f6de-64cc-4ff5-8b76-23a03a309b4f
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column 'Forecast 10165' = CALCULATE(SUM('Customer Forecast'[Quantity]),FILTER('Customer Forecast',MONTH('Customer Forecast'[Starting Date])=MONTH('SKU Orders by Date - Main Table'[date])),FILTER('Customer Forecast','Customer Forecast'[Item No_]='SKU Orders by Date - Main Table'[REV SKU]),FILTER('Customer Forecast','Customer Forecast'[Customer No_]="10165"),FILTER('Customer Forecast',YEAR('Customer Forecast'[Starting Date])=YEAR('SKU Orders by Date - Main Table'[date])))
			formatString: 0
			lineageTag: c86a2b2f-1742-46df-8356-d1dbff6f29e5
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column Forecast = 'SKU Orders by Date - Main Table'[Forecast 10160]+'SKU Orders by Date - Main Table'[Forecast 10165]
			formatString: 0
			lineageTag: ed25273a-1961-448e-8711-8738bfe611da
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column advertised_asin
			dataType: string
			lineageTag: 83b4b9e1-940a-4a34-b1c3-dfd1f24fca57
			summarizeBy: none
			sourceColumn: advertised_asin

			annotation SummarizationSetBy = Automatic

		column 'Clicks from Ad Spend' = CALCULATE(SUM(ads_sponsored_products_advertised_product[clicks]),FILTER(ads_sponsored_products_advertised_product,[advertised_sku]='SKU Orders by Date - Main Table'[sku]),FILTER(ads_sponsored_products_advertised_product,[date]='SKU Orders by Date - Main Table'[date]))
			formatString: 0
			lineageTag: dbde4126-61bf-4533-9af1-318dcb60849c
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Ad Spend Units' = ```
				IF((CALCULATE(SUM(ads_sponsored_products_purchased_product[1_day_total_units]),FILTER(ads_sponsored_products_purchased_product,ads_sponsored_products_purchased_product[advertised_sku]='SKU Orders by Date - Main Table'[sku]),FILTER(ads_sponsored_products_purchased_product,ads_sponsored_products_purchased_product[date]='SKU Orders by Date - Main Table'[date]))+CALCULATE(SUM(ads_sponsored_products_purchased_product[1_day_other_sku_units]),FILTER(ads_sponsored_products_purchased_product,ads_sponsored_products_purchased_product[advertised_sku]='SKU Orders by Date - Main Table'[sku]),FILTER(ads_sponsored_products_purchased_product,ads_sponsored_products_purchased_product[date]='SKU Orders by Date - Main Table'[date])))=BLANK(),0,CALCULATE(SUM(ads_sponsored_products_purchased_product[1_day_total_units]),FILTER(ads_sponsored_products_purchased_product,ads_sponsored_products_purchased_product[advertised_sku]='SKU Orders by Date - Main Table'[sku]),FILTER(ads_sponsored_products_purchased_product,ads_sponsored_products_purchased_product[date]='SKU Orders by Date - Main Table'[date]))+CALCULATE(SUM(ads_sponsored_products_purchased_product[1_day_other_sku_units]),FILTER(ads_sponsored_products_purchased_product,ads_sponsored_products_purchased_product[advertised_sku]='SKU Orders by Date - Main Table'[sku]),FILTER(ads_sponsored_products_purchased_product,ads_sponsored_products_purchased_product[date]='SKU Orders by Date - Main Table'[date])))
				
				```
			formatString: 0
			lineageTag: d2aa4cc5-ce6d-4fe9-afc0-f9992b36cce9
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		partition 'SKU Orders by Date - Main Table' = m
			mode: import
			source =
					let
					    Source = Odbc.DataSource("dsn=WAP", [HierarchicalNavigation=true]),
					    #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database" = Source{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data],
					    public_Schema = #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database"{[Name="public",Kind="Schema"]}[Data],
					    transactions_standard_orders_View = public_Schema{[Name="transactions_standard_orders",Kind="View"]}[Data],
					    #"Removed Columns" = Table.RemoveColumns(transactions_standard_orders_View,{"id", "_created_on", "_last_updated_on", "_revision", "_row_index"}),
					    #"Changed Type" = Table.TransformColumnTypes(#"Removed Columns",{{"date_time", type date}}),
					    #"Filtered Rows" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNMonths([date_time], 3) or Date.IsInCurrentMonth([date_time])),
					    #"Removed Columns1" = Table.RemoveColumns(#"Filtered Rows",{"settlement_id"}),
					    #"Removed Columns2" = Table.RemoveColumns(#"Removed Columns1",{ "description", "marketplace", "fulfillment", "order_city", "order_state", "order_postal", "_partneruuid", "marketplace_withheld_tax", "account_type", "product_sales_tax", "shipping_credits_tax", "giftwrap_credits_tax", "promotional_rebates_tax", "tax_collection_model"}),
					    #"Remove Order ID HERE WHEN DONE" = Table.RemoveColumns(#"Removed Columns2",{"quantity", "product_sales", "shipping_credits", "gift_wrap_credits", "promotional_rebates", "sales_tax_collected", "marketplace_facilitator_tax", "selling_fees", "fba_fees", "other_transaction_fees", "other", "total", "type"}),
					    #"Filtered Rows1" = Table.SelectRows(#"Remove Order ID HERE WHEN DONE", each ([sku] <> "")),
					    #"Merged Queries" = Table.NestedJoin(#"Filtered Rows1", {"sku"}, inventory_all_listings, {"seller_sku"}, "Item", JoinKind.LeftOuter),
					    #"Expanded Item1" = Table.ExpandTableColumn(#"Merged Queries", "Item", {"asin1"}, {"Item.asin1"}),
					    #"Renamed Columns1" = Table.RenameColumns(#"Expanded Item1",{{"Item.asin1", "Item.ASIN"}}),
					    #"Changed Type1" = Table.TransformColumnTypes(#"Renamed Columns1",{{"date_time", type text}}),
					    #"Renamed Columns" = Table.RenameColumns(#"Changed Type1",{{"date_time", "date"}}),
					    #"Removed Columns3" = Table.RemoveColumns(#"Renamed Columns",{"order_id"}),
					    #"Added Custom" = Table.AddColumn(#"Removed Columns3", "Missing Spend", each 0),
					    #"Changed Type2" = Table.TransformColumnTypes(#"Added Custom",{{"Missing Spend", type number}}),
					    #"Appended Query" = Table.Combine({#"Changed Type2", #"Spend by SKU by Date"}),
					    #"Changed Type3" = Table.TransformColumnTypes(#"Appended Query",{{"date", type text}}),
					    #"Added Custom1" = Table.AddColumn(#"Changed Type3", "UID with SKU", each [date]&[sku]),
					    #"Removed Duplicates" = Table.Distinct(#"Added Custom1", {"UID with SKU"}),
					    #"Removed Columns4" = Table.RemoveColumns(#"Removed Duplicates",{"UID with SKU"}),
					    #"Changed Type4" = Table.TransformColumnTypes(#"Removed Columns4",{{"date", type date}})
					in
					    #"Changed Type4"

		annotation PBI_ResultType = Table

		annotation PBI_NavigationStepName = Navigation
```
