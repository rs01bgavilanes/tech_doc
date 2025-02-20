---
title: returns_fba_inventory
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Purchase Invoice Line'
		lineageTag: 37f3a8e8-9f01-4636-81d8-665f04f7f418

		column 'Document No_'
			dataType: string
			lineageTag: 28d94060-ce0b-423f-96a8-da4afdba4f95
			summarizeBy: none
			sourceColumn: Document No_

			annotation SummarizationSetBy = Automatic

		column 'Buy-from Vendor No_'
			dataType: string
			lineageTag: 880b4b65-b069-438c-9dda-c3a205479a98
			summarizeBy: none
			sourceColumn: Buy-from Vendor No_

			annotation SummarizationSetBy = Automatic

		column No_
			dataType: string
			lineageTag: d03d2568-57d9-40f9-9bbe-89d0b1419b1d
			summarizeBy: none
			sourceColumn: No_

			annotation SummarizationSetBy = Automatic

		column Description
			dataType: string
			lineageTag: f3293356-f11a-4973-8869-999f3cbc937a
			summarizeBy: none
			sourceColumn: Description

			annotation SummarizationSetBy = Automatic

		column 'Posting Date'
			dataType: dateTime
			formatString: Long Date
			lineageTag: 334dfd2d-77e2-4687-aca2-62d7016e78bb
			summarizeBy: none
			sourceColumn: Posting Date

			variation Variation
				isDefault
				relationship: ecdd4cb7-ee29-4b59-af99-675b0d866268
				defaultHierarchy: LocalDateTable_b8428a2e-2ca6-4c4c-9254-736a0b4c2faa.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column 'Purchase Invoice Header.Posting Date'
			dataType: dateTime
			formatString: mm/dd/yy
			lineageTag: 3f2e12a7-9f3c-419a-938d-566c2f8ec2bb
			summarizeBy: none
			sourceColumn: Purchase Invoice Header.Posting Date

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column Amount
			dataType: double
			lineageTag: e52bd7c1-3739-4880-a3ca-b8e3dcb60d29
			summarizeBy: sum
			sourceColumn: Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		partition 'Purchase Invoice Line' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Purch_ Inv_ Line" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Purch_ Inv_ Line"]}[Data],
					    #"Filtered Rows" = Table.SelectRows(#"dbo_RevolutionSupply$Purch_ Inv_ Line", each [#"Buy-from Vendor No_"] = "100002"),
					    #"Removed Columns" = Table.RemoveColumns(#"Filtered Rows",{"timestamp", "Line No_", "Type", "Location Code", "Posting Group", "Expected Receipt Date", "Description 2", "Unit of Measure", "Quantity", "Direct Unit Cost", "Unit Cost (LCY)", "VAT _", "Line Discount _", "Line Discount Amount", "Amount Including VAT", "Unit Price (LCY)", "Allow Invoice Disc_", "Gross Weight", "Net Weight", "Units per Parcel", "Unit Volume", "Appl_-to Item Entry", "Shortcut Dimension 1 Code", "Shortcut Dimension 2 Code", "Job No_", "Indirect Cost _", "Receipt No_", "Receipt Line No_", "Order No_", "Order Line No_", "Pay-to Vendor No_", "Inv_ Discount Amount", "Vendor Item No_", "Gen_ Bus_ Posting Group", "Gen_ Prod_ Posting Group", "VAT Calculation Type", "Transaction Type", "Transport Method", "Attached to Line No_", "Entry Point", "Area", "Transaction Specification", "Tax Area Code", "Tax Liable", "Tax Group Code", "Use Tax", "VAT Bus_ Posting Group", "VAT Prod_ Posting Group", "Blanket Order No_", "Blanket Order Line No_", "VAT Base Amount", "Unit Cost", "System-Created Entry", "Line Amount", "VAT Difference", "VAT Identifier", "IC Partner Ref_ Type", "IC Partner Reference", "Prepayment Line", "IC Partner Code", "Pmt_ Discount Amount", "Dimension Set ID", "Job Task No_", "Job Line Type", "Job Unit Price", "Job Total Price", "Job Line Amount", "Job Line Discount Amount", "Job Line Discount _", "Job Unit Price (LCY)", "Job Total Price (LCY)", "Job Line Amount (LCY)", "Job Line Disc_ Amount (LCY)", "Job Currency Factor", "Job Currency Code", "Deferral Code", "Prod_ Order No_", "Variant Code", "Bin Code", "Qty_ per Unit of Measure", "Unit of Measure Code", "Quantity (Base)", "FA Posting Date", "FA Posting Type", "Depreciation Book Code", "Salvage Value", "Depr_ until FA Posting Date", "Depr_ Acquisition Cost", "Maintenance Code", "Insurance No_", "Budgeted FA No_", "Duplicate in Depreciation Book", "Use Duplication List", "Responsibility Center", "Cross-Reference No_", "Unit of Measure (Cross Ref_)", "Cross-Reference Type", "Cross-Reference Type No_", "Item Category Code", "Nonstock", "Purchasing Code", "Product Group Code", "Return Reason Code", "Provincial Tax Area Code", "IRS 1099 Liable", "Routing No_", "Operation No_", "Work Center No_", "Prod_ Order Line No_", "Overhead Rate", "Routing Reference No_"}),
					    #"Changed Type" = Table.TransformColumnTypes(#"Removed Columns",{{"Posting Date", type date}}),
					    #"Filtered Rows1" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNMonths([Posting Date], 3) or Date.IsInCurrentMonth([Posting Date])),
					    #"Merged Queries" = Table.NestedJoin(#"Filtered Rows1", {"Document No_"}, #"Purchase Invoice Header", {"No_"}, "Purchase Invoice Header", JoinKind.LeftOuter),
					    #"Expanded Purchase Invoice Header" = Table.ExpandTableColumn(#"Merged Queries", "Purchase Invoice Header", {"Posting Date"}, {"Purchase Invoice Header.Posting Date"})
					in
					    #"Expanded Purchase Invoice Header"

		annotation PBI_ResultType = Table
```
