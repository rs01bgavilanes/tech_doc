---
title: inventory_all_listings
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Data Validation'
		lineageTag: 3fdac5d3-2511-40b6-b985-7ee72c8a55b7

		measure 'COGS - % Difference' = (SUM('Data Validation'[COGS - Main Table])-SUM('Data Validation'[COGS - NAV]))/SUM('Data Validation'[COGS - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 0682cecc-fc9d-4a30-a36b-57693c49f434

		measure 'Unit Orders % Difference' = (SUM('Data Validation'[Unit Orders - TSO])-SUM('Data Validation'[Unit Orders - NAV]))/SUM('Data Validation'[Unit Orders - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 4b537b30-5a1b-458b-a3c0-9f7606418766

		measure 'Unit Returns % Difference' = (ABS(SUM('Data Validation'[Unit Returns - TSO]))-ABS(SUM('Data Validation'[Unit Returns - NAV])))/ABS(SUM('Data Validation'[Unit Returns - NAV]))
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 8cda96d7-b6a8-4cc8-b793-4672ec8e4706

		measure 'Unit Adjustments % Difference' = (SUM('Data Validation'[Total Unit Adjustments - Main Table])-SUM('Data Validation'[Unit Adjustments - NAV]))/SUM('Data Validation'[Unit Adjustments - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 3bc8ed1d-a977-4505-8c1f-0b12ce3570ec

		measure 'Total Sales % Difference' = (SUM('Data Validation'[Total Sales - Main Table])-SUM('Data Validation'[Total Sales - Nav]))/SUM('Data Validation'[Total Sales - Nav])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 01fd9cf6-5721-4c94-93c3-0c82288bbcd9

		measure 'Returns ($) % Difference' = (ABS(SUM('Data Validation'[Total Returns - TSO]))-ABS(SUM('Data Validation'[Total Returns (Credit Memos) - Nav])))/SUM('Data Validation'[Total Returns (Credit Memos) - Nav])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 96ec5087-8896-4791-8de1-66aeee5d322a

		measure 'Adjustment % Difference' = (SUM('Data Validation'[Total Adjustments - Amazon])-SUM('Data Validation'[Total Adjustments - Nav]))/SUM('Data Validation'[Total Adjustments - Nav])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 15935b98-9897-471e-9685-31f30da73926

		measure 'Ad Spend % Difference' = (SUM('Data Validation'[Total Ad Spend - RA])-SUM('Data Validation'[Total Ad Spend - Nav]))/SUM('Data Validation'[Total Ad Spend - Nav])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 1c3eabad-3968-4f72-8859-b62939b47276

		measure 'Total Amazon Fees % Difference_measure' =
				
				(ABS(SUM('Data Validation'[Total Amazon Fees Main Table]))-ABS(SUM('Data Validation'[Total Amazon Fees - NAV])))/SUM('Data Validation'[Total Amazon Fees - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 2251bde7-f9a3-4505-a38f-468ae6513ac6

		column 'Date Month'
			dataType: dateTime
			formatString: Long Date
			lineageTag: 7e9610ba-b4be-44e4-b359-12b1f60a3375
			summarizeBy: none
			sourceColumn: Date Month

			variation Variation
				isDefault
				relationship: 43853f71-0177-4b01-9885-eca26304ec11
				defaultHierarchy: LocalDateTable_a3d0119e-ea5a-41eb-b64d-2578c5e438cc.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column 'Total Sales - Nav' = CALCULATE(SUM('Sales Invoice Line'[Amount]),FILTER('Sales Invoice Line',month('Sales Invoice Line'[Sales Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Invoice Line',YEAR('Sales Invoice Line'[Sales Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])),FILTER('Sales Invoice Line','Sales Invoice Line'[External Document No.]<>BLANK()))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 14070a17-eff4-4a85-a965-75106498725d
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Sales - Amazon' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: c2e06ab8-6232-4df8-abc4-b41e3969986c
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Returns (Credit Memos) - Nav' =
				
				IF(MONTH('Data Validation'[Date Month])=8,
				
				CALCULATE(SUM('Sales Credit Memo Line'[Amount]),FILTER('Sales Credit Memo Line',MONTH('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Credit Memo Line',YEAR('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date])=YEAR('Data Validation'[Date Month])),FILTER('Sales Credit Memo Line','Sales Credit Memo Line'[Sales Credit Memo Header.External Document No_]<>"AMAZON ORDER - ERROR 081524"))+ABS(
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO',LEFT('Amazon Cost Analysis - TSO'[sku],4)="amzn"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])))),
				
				CALCULATE(SUM('Sales Credit Memo Line'[Amount]),FILTER('Sales Credit Memo Line',MONTH('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Credit Memo Line',YEAR('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date])=YEAR('Data Validation'[Date Month])))+ABS(
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO',LEFT('Amazon Cost Analysis - TSO'[sku],4)="amzn"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])))))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 594f88a0-1bac-4d46-997c-f2c8e8ef3fef
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Returns - TSO' = ABS(CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund")))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 0eaa6312-98fa-4e1c-9420-5d8f76ed7b53
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Adjustments - Nav' = CALCULATE(SUM('Sales Invoice Line'[Amount]),FILTER('Sales Invoice Line',month('Sales Invoice Line'[Sales Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Invoice Line',YEAR('Sales Invoice Line'[Sales Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])),FILTER('Sales Invoice Line','Sales Invoice Line'[External Document No.]=BLANK()))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 9ea4bf9a-4e07-4ff0-9b02-eccaee1b1122
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Adjustments - Amazon' =
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Customer Service Issue"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Damaged:Warehouse"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - General Adjustment"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Lost:Warehouse"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Customer Return"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Fee Correction"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[total]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[description]="FBA Inventory Reimbursement - Lost:Inbound"))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 48ffd589-30ed-4217-bb08-966b5d971592
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Sales - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Sales]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 6e22293f-57e8-4c46-b173-31c0de03cbe4
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Sales - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Sales]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: df6ab128-5496-42b0-8a77-57a9494cc494
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Selling Fees - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Selling Fees]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 3043b75f-6515-42d3-8521-6e66701d0e81
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'FBA Fees - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[FBA Fees]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: fd212e5f-ca4c-4aaa-99de-68fb3ec5c84a
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Gift Wrap Credits - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Gift Wrap Credits]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.###############;(\$#,0.###############);\$#,0.###############
			lineageTag: 6b3e10f2-6eaf-4d24-adb7-216fc0da69df
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Promotional Rebates - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Promotional Rebates]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: ca1b1551-bf6b-44ff-bd9f-1ac74b97ea96
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Shipping Credits - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Shipping Credits]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 10fbae10-268f-42c3-92b5-83ef1629fffe
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Other Transactions - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Other Transaction Fees]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.###############;(\$#,0.###############);\$#,0.###############
			lineageTag: 8e78634b-d8d1-416f-aea7-879e0ee789fb
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Other Fees - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Other]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: b552d7b0-4971-4e6e-825e-14c30b665e46
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'FBA Fees - NAV' = CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Description]="Amazon - FBA Fees"),FILTER('Purchase Invoice Line',MONTH('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Purchase Invoice Line',YEAR('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.###############;(\$#,0.###############);\$#,0.###############
			lineageTag: d56eac92-8012-45d3-abc7-f77490272b4e
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Other Fees - NAV' =
				
				CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Description]="Amazon - Other Fees - Adjustments"),FILTER('Purchase Invoice Line',MONTH('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Purchase Invoice Line',YEAR('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))+
				CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Description]="Amazon - Other Fees - Service Fees"),FILTER('Purchase Invoice Line',MONTH('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Purchase Invoice Line',YEAR('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))+
				CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Description]="Amazon - Other Transaction Fees"),FILTER('Purchase Invoice Line',MONTH('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Purchase Invoice Line',YEAR('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 6a681f4d-d55e-41bb-b606-3c8088cbe54b
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Promotional Rebate - NAV' = CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Description]="Amazon - Promotional Rebate"),FILTER('Purchase Invoice Line',MONTH('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Purchase Invoice Line',YEAR('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 03637073-95d3-4318-b2f6-30a0b8187d20
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Shipping Credits - NAV' = CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[No_]="55209"),FILTER('Purchase Invoice Line',MONTH('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Purchase Invoice Line',YEAR('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))+CALCULATE(SUM('Sales Invoice Line'[Amount]),FILTER('Sales Invoice Line','Sales Invoice Line'[No_]="53101"),FILTER('Sales Invoice Line',MONTH('Sales Invoice Line'[Sales Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Invoice Line',YEAR('Sales Invoice Line'[Sales Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))
			lineageTag: 779c0582-6040-45ab-8ed2-7551ce2a23a7
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Selling Fees - NAV' = CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Description]="Amazon - Selling Fees"),FILTER('Purchase Invoice Line',MONTH('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Purchase Invoice Line',YEAR('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: effad1db-e710-44f9-9b51-52055b1824f3
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Selling Fees % Difference' = (ABS('Data Validation'[Selling Fees - Main Table])-ABS('Data Validation'[Selling Fees - NAV]))/ABS('Data Validation'[Selling Fees - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 5d9806d7-b16d-4457-8558-758ffac96f2f
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Other Fees % Difference' = (ABS('Data Validation'[Other Fees - Main Table])-ABS('Data Validation'[Other Fees - NAV]))/ABS('Data Validation'[Other Fees - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: d5b1cf5b-9ea7-4ef6-b2eb-5228e766edca
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'FBA Fees % Difference' = (ABS('Data Validation'[FBA Fees - Main Table])-ABS('Data Validation'[FBA Fees - NAV]))/ABS('Data Validation'[FBA Fees - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: ac4ed51d-62a5-4445-8a26-adfc9dbe4a9a
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Promotional Rebates % Difference' = (ABS('Data Validation'[Promotional Rebates - Main Table])-ABS('Data Validation'[Promotional Rebate - NAV]))/ABS('Data Validation'[Promotional Rebate - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: e7323994-c39a-4a7c-a054-ebedf26aad9e
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Shipping Credits % Difference' = (ABS('Data Validation'[Shipping Credits - Main Table])-ABS('Data Validation'[Shipping Credits - NAV]))/ABS('Data Validation'[Shipping Credits - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 359920c0-68b0-481e-846a-2ec31e09d770
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Amazon Fees % Difference' =
				
				(ABS(SUM('Data Validation'[Total Amazon Fees Main Table]))-SUM('Data Validation'[Total Amazon Fees - NAV]))/SUM('Data Validation'[Total Amazon Fees - NAV])
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 9fbb5d7b-99aa-4b98-9e30-729f2c0bef73
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Amazon Fees Main Table' = ABS('Data Validation'[Selling Fees - Main Table])+ABS('Data Validation'[FBA Fees - Main Table])+ABS('Data Validation'[Promotional Rebates - Main Table])+ABS('Data Validation'[Shipping Credits - Main Table])+ABS('Data Validation'[Other Fees - Main Table])
			lineageTag: 679a9c8c-f45f-4dda-938a-18e0df83d3a7
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Total Amazon Fees - NAV' = ABS('Data Validation'[Selling Fees - NAV])+ABS('Data Validation'[FBA Fees - NAV])+ABS('Data Validation'[Promotional Rebate - NAV])+ABS('Data Validation'[Shipping Credits - NAV])+ABS('Data Validation'[Other Fees - NAV])
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 56f8f979-989f-4ddc-b384-8276caf4917c
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Amazon Fees Main Table NO ABS' = 'Data Validation'[Selling Fees - Main Table]+'Data Validation'[FBA Fees - Main Table]+'Data Validation'[Promotional Rebates - Main Table]+'Data Validation'[Shipping Credits - Main Table]+'Data Validation'[Other Fees - Main Table]
			formatString: \$#,0.###############;(\$#,0.###############);\$#,0.###############
			lineageTag: 33421dd3-5072-4006-a557-155a4c541613
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'COGS - NAV' = CALCULATE(SUM('Sales Invoice Line'[Unit Cost]),FILTER('Sales Invoice Line',MONTH('Sales Invoice Line'[Sales Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Invoice Line',YEAR('Sales Invoice Line'[Sales Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 160ffc42-6fe2-4517-a927-6a342d35018e
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'COGS - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Unit Cost]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))+CALCULATE(SUM('SKU Orders by Date - Main Table'[Adjustments]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: e0471b19-4588-41b3-9f71-700a813d9908
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Orders - TSO' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Order"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])))
			formatString: #,0
			lineageTag: 558905cb-c04e-46f8-8355-00294ddd76cd
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column 'Unit Returns - TSO' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[product_sales]<>0))
			formatString: #,0
			lineageTag: c305c019-93aa-4e71-b171-10753ca42daa
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column 'Unit Ajustments - TSO' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Adjustment"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])))
			formatString: #,0
			lineageTag: 4b77dfb3-225a-4024-a4d1-522744f1639b
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Unit Orders - NAV' = CALCULATE(SUM('Sales Invoice Line'[Adjusted QTY for Bulk]),FILTER('Sales Invoice Line',MONTH('Sales Invoice Line'[Sales Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Invoice Line',YEAR('Sales Invoice Line'[Sales Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])),FILTER('Sales Invoice Line','Sales Invoice Line'[Sales Invoice Header.External Document No_]<>BLANK()))
			formatString: #,0
			lineageTag: 7549ab49-793b-49f7-a848-0ea3c5c9714f
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column 'Unit Adjustments - NAV' = CALCULATE(SUM('Sales Invoice Line'[Adjusted QTY for Bulk]),FILTER('Sales Invoice Line',MONTH('Sales Invoice Line'[Sales Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Invoice Line',YEAR('Sales Invoice Line'[Sales Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])),FILTER('Sales Invoice Line','Sales Invoice Line'[Sales Invoice Header.External Document No_]=BLANK()))
			formatString: #,0
			lineageTag: e9a65d5b-96d2-40fd-a048-a7d4dc8fa2ae
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column 'Unit Returns - NAV' =
				IF(MONTH('Data Validation'[Date Month])=8,
				
				CALCULATE(SUM('Sales Credit Memo Line'[Adjusted QTY for Bulk]),FILTER('Sales Credit Memo Line',MONTH('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Credit Memo Line',YEAR('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date])=YEAR('Data Validation'[Date Month])),FILTER('Sales Credit Memo Line','Sales Credit Memo Line'[Sales Credit Memo Header.External Document No_]<>"AMAZON ORDER - ERROR 081524"))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO',LEFT('Amazon Cost Analysis - TSO'[sku],4)="amzn"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month]))),
				
				CALCULATE(SUM('Sales Credit Memo Line'[Adjusted QTY for Bulk]),FILTER('Sales Credit Memo Line',MONTH('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Sales Credit Memo Line',YEAR('Sales Credit Memo Line'[Sales Credit Memo Header.Posting Date])=YEAR('Data Validation'[Date Month])))+
				CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO',LEFT('Amazon Cost Analysis - TSO'[sku],4)="amzn"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month]))))
			formatString: #,0
			lineageTag: ef981dc7-4f39-411a-9440-045632ef60d8
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column 'Total Ad Spend - RA' = CALCULATE(SUM(ads_sponsored_products_advertised_product[spend]),FILTER(ads_sponsored_products_advertised_product,MONTH(ads_sponsored_products_advertised_product[date])=MONTH('Data Validation'[Date Month])),FILTER(ads_sponsored_products_advertised_product,YEAR(ads_sponsored_products_advertised_product[date])=YEAR('Data Validation'[Date Month])))+CALCULATE(SUM(ads_sponsored_brands_campaign[spend]),FILTER(ads_sponsored_brands_campaign,MONTH(ads_sponsored_brands_campaign[date])=MONTH('Data Validation'[Date Month])),FILTER(ads_sponsored_brands_campaign,YEAR(ads_sponsored_brands_campaign[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 065a9be6-ff9c-4a3c-8fd3-e7e9c9414a05
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Ad Spend - Nav' = CALCULATE(SUM('Purchase Invoice Line'[Amount]),FILTER('Purchase Invoice Line','Purchase Invoice Line'[Description]="Amazon - Other Transaction Fees - Advertising"),FILTER('Purchase Invoice Line',MONTH('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=MONTH('Data Validation'[Date Month])),FILTER('Purchase Invoice Line',YEAR('Purchase Invoice Line'[Purchase Invoice Header.Posting Date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 99ce0dff-9602-40b0-a302-337bb97e547d
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Regraded Returns - Amazon' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO',LEFT('Amazon Cost Analysis - TSO'[sku],4)="amzn"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: ae4c5496-99e7-495f-b564-98b99a75558a
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Regraded Unit Returns - Amazon' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO',LEFT('Amazon Cost Analysis - TSO'[sku],4)="amzn"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])))
			lineageTag: 889ab39c-7e0f-4a37-a90f-9594328af389
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'zero product sales' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[quantity]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"),FILTER('Amazon Cost Analysis - TSO',LEFT('Amazon Cost Analysis - TSO'[sku],4)<>"amzn"),FILTER('Amazon Cost Analysis - TSO',MONTH('Amazon Cost Analysis - TSO'[date_time])=MONTH('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO',YEAR('Amazon Cost Analysis - TSO'[date_time])=YEAR('Data Validation'[Date Month])),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[product_sales]<>0))
			formatString: 0
			lineageTag: 9d296047-763d-4313-9fc7-8ff36452be66
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Amazon Fees Check (Main Table)' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Total Check]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: a0afa4e8-01a4-4eb4-95d4-20b46e7a699f
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Total Sponsored Brands- RA' = CALCULATE(SUM(ads_sponsored_brands_campaign[spend]),FILTER(ads_sponsored_brands_campaign,MONTH(ads_sponsored_brands_campaign[date])=MONTH('Data Validation'[Date Month])),FILTER(ads_sponsored_brands_campaign,YEAR(ads_sponsored_brands_campaign[date])=YEAR('Data Validation'[Date Month])))
			lineageTag: 26e7679f-8133-49f2-99f3-3f06093cfe54
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Total Unit Adjustments - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Unit Adjustments_]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			formatString: #,0
			lineageTag: 9dd845c4-7af4-4b2c-881a-348a17c65d3e
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isDecimal":true}

		column 'Total Adjustments_ - Main Table' = CALCULATE(SUM('SKU Orders by Date - Main Table'[Adjustments_]),FILTER('SKU Orders by Date - Main Table',MONTH('SKU Orders by Date - Main Table'[date])=MONTH('Data Validation'[Date Month])),FILTER('SKU Orders by Date - Main Table',YEAR('SKU Orders by Date - Main Table'[date])=YEAR('Data Validation'[Date Month])))
			lineageTag: 3f12d6cc-2bd6-4102-a4e5-86381f479c80
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Ad Spend - Sponsored Brand' = CALCULATE(SUM(ads_sponsored_brands_campaign[spend]),FILTER(ads_sponsored_brands_campaign,MONTH(ads_sponsored_brands_campaign[date])=MONTH('Data Validation'[Date Month])),FILTER(ads_sponsored_brands_campaign,YEAR(ads_sponsored_brands_campaign[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 629b943e-5979-47fe-85ba-05ee7304b5a4
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		column 'Ad Spend - Sponsored Products' = CALCULATE(SUM(ads_sponsored_products_advertised_product[spend]),FILTER(ads_sponsored_products_advertised_product,MONTH(ads_sponsored_products_advertised_product[date])=MONTH('Data Validation'[Date Month])),FILTER(ads_sponsored_products_advertised_product,YEAR(ads_sponsored_products_advertised_product[date])=YEAR('Data Validation'[Date Month])))
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 472d9ba3-96d8-401b-bcb4-1a76692e440a
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		partition 'Data Validation' = m
			mode: import
			source =
					let
					    Source = Table.FromRows(Json.Document(Binary.Decompress(Binary.FromText("Xc6xDcAgDETRXagjxTYchFkQ+6+BG4of6Zqna/5axfzNhUUr+0kGWclGiuzkID9ygm4kq/xXdV+xWWwWm8VmsTm5Dw==", BinaryEncoding.Base64), Compression.Deflate)), let _t = ((type nullable text) meta [Serialized.Text = true]) in type table [#"Date Month" = _t]),
					    #"Changed Type" = Table.TransformColumnTypes(Source,{{"Date Month", type date}})
					in
					    #"Changed Type"

		annotation PBI_ResultType = Table
```
