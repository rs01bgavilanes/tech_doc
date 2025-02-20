---
title: SKU Orders by Date - Main Table
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Sales Invoice Line'
		lineageTag: 2de63add-6b45-44d8-ad49-d178905428c5

		column 'Document No_'
			dataType: string
			lineageTag: 6ce60aff-99f9-4980-9fe3-a3bf4d15dec8
			summarizeBy: none
			sourceColumn: Document No_

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Customer No_'
			dataType: string
			lineageTag: c1f51840-eb42-45fa-9c01-31b5b0d6e640
			summarizeBy: none
			sourceColumn: Sell-to Customer No_

			annotation SummarizationSetBy = Automatic

		column No_
			dataType: string
			lineageTag: daa0ecf0-5a77-427b-908e-1fc84f1af47f
			summarizeBy: none
			sourceColumn: No_

			annotation SummarizationSetBy = Automatic

		column 'Shipment Date'
			dataType: dateTime
			formatString: mm/dd/yyyy
			lineageTag: 85191bfe-bd35-49bf-9558-b39cb1837c36
			summarizeBy: none
			sourceColumn: Shipment Date

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column Quantity
			dataType: double
			lineageTag: ffdecbad-c0f8-42a5-ae11-9a33fda4aa27
			summarizeBy: sum
			sourceColumn: Quantity

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit Price'
			dataType: double
			lineageTag: a48c307e-6326-4b4c-8306-91df862ef3ce
			summarizeBy: sum
			sourceColumn: Unit Price

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column Amount
			dataType: double
			lineageTag: a9bf211e-7119-4eaa-b6b1-c72fef27f4e4
			summarizeBy: sum
			sourceColumn: Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit Cost'
			dataType: double
			lineageTag: af6a3504-93a6-4477-8727-0596a00d2442
			summarizeBy: sum
			sourceColumn: Unit Cost

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Order ID' =
				
				var order_id = IF(LOOKUPVALUE('Sales Invoice Header'[External Document No_],'Sales Invoice Header'[No_],'Sales Invoice Line'[Document No_])=BLANK(),"AAAAA",LOOKUPVALUE('Sales Invoice Header'[External Document No_],'Sales Invoice Header'[No_],'Sales Invoice Line'[Document No_]))
				RETURN IF(LEFT(order_id,1)="A",RIGHT(order_id,LEN(order_id)-4),order_id)
			lineageTag: e0330625-fece-469b-a608-017a687b7f5a
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'Item No_ and Order ID Key' = CONCATENATE('Sales Invoice Line'[No_],'Sales Invoice Line'[Order ID])
			lineageTag: 7898b664-2cbc-4f4f-817e-d9cc76e9157d
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'VAT _'
			dataType: double
			lineageTag: 6fc8b05d-8bf0-472a-aa0d-fa7307c3d89c
			summarizeBy: sum
			sourceColumn: VAT _

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Line Discount _'
			dataType: double
			lineageTag: 6013d54d-e355-49c9-8707-0c894502d2c0
			summarizeBy: sum
			sourceColumn: Line Discount _

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Line Discount Amount'
			dataType: double
			lineageTag: 4fa7fbe5-5063-4b4f-bbc3-bbed35b26b92
			summarizeBy: sum
			sourceColumn: Line Discount Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Amount Including VAT'
			dataType: double
			lineageTag: ac70b533-87db-4d4b-804c-b31b9b4b3c7d
			summarizeBy: sum
			sourceColumn: Amount Including VAT

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'External Document No.' = LOOKUPVALUE('Sales Invoice Header'[External Document No_],'Sales Invoice Header'[No_],'Sales Invoice Line'[Document No_])
			lineageTag: 6f5bd45f-ade3-4432-9641-dcd526162805
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'Sales Invoice Header.Posting Date'
			dataType: dateTime
			formatString: Long Date
			lineageTag: b2da63d7-c0cc-4e3c-b1fe-805c01afedae
			summarizeBy: none
			sourceColumn: Sales Invoice Header.Posting Date

			variation Variation
				isDefault
				relationship: 3f1269f0-a103-4bee-996e-242bc2381ab7
				defaultHierarchy: LocalDateTable_db530f47-8359-418e-8f3a-1ef542c513aa.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column 'Item.ASIN'
			dataType: string
			lineageTag: d550dab6-56d3-446e-af79-8f8405136427
			summarizeBy: none
			sourceColumn: Item.ASIN

			annotation SummarizationSetBy = Automatic

		column 'Sales Invoice Header.External Document No_'
			dataType: string
			lineageTag: f30daf0d-1d80-4ca5-bda6-fc6a823dfc0d
			summarizeBy: none
			sourceColumn: Sales Invoice Header.External Document No_

			annotation SummarizationSetBy = Automatic

		column 'Prev Month' = IF(MONTH('Sales Invoice Line'[TSO Order Date])<MONTH('Sales Invoice Line'[Sales Invoice Header.Posting Date]),"Prev Month","")
			lineageTag: e1d91cf7-1c7c-4916-baa8-785b00b42ab2
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'Next Month' = IF(MONTH('Sales Invoice Line'[TSO Order Date])>MONTH('Sales Invoice Line'[Sales Invoice Header.Posting Date]),"Next Month","")
			lineageTag: 3ba8b049-edfe-4109-a78e-fe2c38acd6e3
			summarizeBy: none

			annotation SummarizationSetBy = Automatic

		column 'Adjusted QTY for Bulk' = ```
				
				VAR UOM_BULK = LOOKUPVALUE('Item Unit of Measure'[Qty_ per Unit of Measure],'Item Unit of Measure'[Item No_],'Sales Invoice Line'[No_],'Item Unit of Measure'[Code],"Inner Pack")
				VAR IS_BULK = LOOKUPVALUE('Item Card'[Bulk Item],'Item Card'[No.],'Sales Invoice Line'[No_])
				RETURN 
				IF(
				    IS_BULK=TRUE,
				    IF(OR(UOM_BULK<>0,UOM_BULK<>BLANK()),ROUND('Sales Invoice Line'[Quantity]/UOM_BULK,0),'Sales Invoice Line'[Quantity]),
				    'Sales Invoice Line'[Quantity]
				)
				```
			lineageTag: 06f7d67f-497b-48e7-94ff-008d5c71f754
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		partition 'Sales Invoice Line' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Sales Invoice Line" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Sales Invoice Line"]}[Data],
					    #"Removed Columns" = Table.RemoveColumns(#"dbo_RevolutionSupply$Sales Invoice Line",{"timestamp", "Line No_"}),
					    #"Filtered Rows" = Table.SelectRows(#"Removed Columns", each ([#"Sell-to Customer No_"] = "10160")),
					    #"Removed Columns1" = Table.RemoveColumns(#"Filtered Rows",{"Type", "Location Code", "Posting Group", "Description", "Description 2", "Unit of Measure", "Unit Cost (LCY)", "Allow Invoice Disc_", "Gross Weight", "Net Weight", "Units per Parcel", "Unit Volume", "Appl_-to Item Entry", "Shortcut Dimension 1 Code", "Shortcut Dimension 2 Code", "Customer Price Group", "Job No_", "Work Type Code", "Shipment No_", "Shipment Line No_", "Order No_", "Order Line No_", "Bill-to Customer No_", "Inv_ Discount Amount", "Drop Shipment", "Gen_ Bus_ Posting Group", "Gen_ Prod_ Posting Group", "VAT Calculation Type", "Transaction Type", "Transport Method", "Attached to Line No_", "Exit Point", "Area", "Transaction Specification", "Tax Category", "Tax Area Code", "Tax Liable", "Tax Group Code", "VAT Clause Code", "VAT Bus_ Posting Group", "VAT Prod_ Posting Group", "Blanket Order No_", "Blanket Order Line No_", "VAT Base Amount", "System-Created Entry", "Line Amount", "VAT Difference", "VAT Identifier", "IC Partner Ref_ Type", "IC Partner Reference", "Prepayment Line", "IC Partner Code", "Posting Date", "Pmt_ Discount Amount", "Line Discount Calculation", "Dimension Set ID", "Job Task No_", "Job Contract Entry No_", "Deferral Code", "Variant Code", "Bin Code", "Qty_ per Unit of Measure", "Unit of Measure Code", "Quantity (Base)", "FA Posting Date", "Depreciation Book Code", "Depr_ until FA Posting Date", "Duplicate in Depreciation Book", "Use Duplication List", "Responsibility Center", "Cross-Reference No_", "Unit of Measure (Cross Ref_)", "Cross-Reference Type", "Cross-Reference Type No_", "Item Category Code", "Nonstock", "Purchasing Code", "Product Group Code", "Appl_-from Item Entry", "Return Reason Code", "Allow Line Disc_", "Customer Disc_ Group", "Price description", "Package Tracking No_", "TINX Web Order Line Product ID"}),
					    #"Changed Type" = Table.TransformColumnTypes(#"Removed Columns1",{{"Shipment Date", type date}}),
					    #"Filtered Rows1" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNMonths([Shipment Date], 3) or Date.IsInCurrentMonth([Shipment Date])),
					    #"Filtered Rows2" = Table.SelectRows(#"Filtered Rows1", each not Text.StartsWith([No_], "FREIGHT")),
					    #"Merged Queries" = Table.NestedJoin(#"Filtered Rows2", {"Document No_"}, #"Sales Invoice Header", {"No_"}, "Sales Invoice Header", JoinKind.LeftOuter),
					    #"Expanded Sales Invoice Header" = Table.ExpandTableColumn(#"Merged Queries", "Sales Invoice Header", {"Posting Date", "External Document No_"}, {"Sales Invoice Header.Posting Date", "Sales Invoice Header.External Document No_"}),
					    #"Merged Queries1" = Table.NestedJoin(#"Expanded Sales Invoice Header", {"No_"}, Item, {"No_"}, "Item", JoinKind.LeftOuter),
					    #"Expanded Item" = Table.ExpandTableColumn(#"Merged Queries1", "Item", {"ASIN"}, {"Item.ASIN"})
					in
					    #"Expanded Item"

		annotation PBI_ResultType = Table

		annotation PBI_NavigationStepName = Navigation
```
