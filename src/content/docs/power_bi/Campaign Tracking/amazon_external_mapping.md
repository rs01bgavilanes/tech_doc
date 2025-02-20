---
title: Amazon External Mapping
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Amazon External Mapping'
		lineageTag: 9ebca0cd-c09d-4df0-91c2-68c60924d5ee

		column Id
			dataType: int64
			formatString: 0
			lineageTag: b744a5d2-318e-4687-8b84-1f05e9b5e966
			summarizeBy: count
			sourceColumn: Id

			annotation SummarizationSetBy = Automatic

		column type
			dataType: string
			lineageTag: 4985d223-60fa-4620-b17f-68f4c675b07a
			summarizeBy: none
			sourceColumn: type

			annotation SummarizationSetBy = Automatic

		column description
			dataType: string
			lineageTag: 55f13ef9-8fa5-4fbc-9680-8c7dc3d694be
			summarizeBy: none
			sourceColumn: description

			annotation SummarizationSetBy = Automatic

		column product_sales
			dataType: string
			lineageTag: 226eb4d3-014e-42aa-bf54-db5062485bf1
			summarizeBy: none
			sourceColumn: product_sales

			annotation SummarizationSetBy = Automatic

		column shipping_credits
			dataType: string
			lineageTag: 98bf5b12-8590-4b3f-80c2-d8136c317000
			summarizeBy: none
			sourceColumn: shipping_credits

			annotation SummarizationSetBy = Automatic

		column gift_wrap_credits
			dataType: string
			lineageTag: c89c2b28-35fa-4581-a0e2-d82273a5f2ae
			summarizeBy: none
			sourceColumn: gift_wrap_credits

			annotation SummarizationSetBy = Automatic

		column promotional_rebates
			dataType: string
			lineageTag: 9362d5e3-b1f2-4d74-a50f-c28599058f9c
			summarizeBy: none
			sourceColumn: promotional_rebates

			annotation SummarizationSetBy = Automatic

		column sales_tax_collected
			dataType: string
			lineageTag: 43c2761b-3cde-4a41-8332-3183a306fa6e
			summarizeBy: none
			sourceColumn: sales_tax_collected

			annotation SummarizationSetBy = Automatic

		column marketplace_facilitator_tax
			dataType: string
			lineageTag: 45acfe85-5de4-4441-91eb-64e04adcfab6
			summarizeBy: none
			sourceColumn: marketplace_facilitator_tax

			annotation SummarizationSetBy = Automatic

		column selling_fees
			dataType: string
			lineageTag: 0342ef7e-bf3d-47c1-8e4b-0ede0315bffa
			summarizeBy: none
			sourceColumn: selling_fees

			annotation SummarizationSetBy = Automatic

		column fba_fees
			dataType: string
			lineageTag: b0beb082-504a-49d1-b1f4-92e2c426cac8
			summarizeBy: none
			sourceColumn: fba_fees

			annotation SummarizationSetBy = Automatic

		column other_transaction_fees
			dataType: string
			lineageTag: 0d1eeb70-7bf6-4878-9f57-9660de2a3c14
			summarizeBy: none
			sourceColumn: other_transaction_fees

			annotation SummarizationSetBy = Automatic

		column other
			dataType: string
			lineageTag: 9b54e7a5-06fe-42da-b8f2-3335f6cb7498
			summarizeBy: none
			sourceColumn: other

			annotation SummarizationSetBy = Automatic

		column total
			dataType: string
			lineageTag: 4e83f508-86e6-4362-a7af-d328eaeee4a6
			summarizeBy: none
			sourceColumn: total

			annotation SummarizationSetBy = Automatic

		column marketplace_withheld_tax
			dataType: string
			lineageTag: 021a780e-78e8-4785-92a2-37dd1a13b214
			summarizeBy: none
			sourceColumn: marketplace_withheld_tax

			annotation SummarizationSetBy = Automatic

		column product_sales_tax
			dataType: string
			lineageTag: 2d8123b5-05ab-4cd6-830e-310f8f0f9ff2
			summarizeBy: none
			sourceColumn: product_sales_tax

			annotation SummarizationSetBy = Automatic

		column shipping_credits_tax
			dataType: string
			lineageTag: c05b0a49-146b-4c0c-b213-3a5b989d3af5
			summarizeBy: none
			sourceColumn: shipping_credits_tax

			annotation SummarizationSetBy = Automatic

		column giftwrap_credits_tax
			dataType: string
			lineageTag: bd16aed5-b1b2-41dd-b1b1-88ebfb66050f
			summarizeBy: none
			sourceColumn: giftwrap_credits_tax

			annotation SummarizationSetBy = Automatic

		column promotional_rebates_tax
			dataType: string
			lineageTag: 60d95f7b-f9b2-41bf-87c7-ea264a99f126
			summarizeBy: none
			sourceColumn: promotional_rebates_tax

			annotation SummarizationSetBy = Automatic

		column 'Create Inv_ From Other'
			dataType: int64
			formatString: 0
			lineageTag: 0c76250a-d9ee-4e81-b495-914463632134
			summarizeBy: sum
			sourceColumn: Create Inv_ From Other

			annotation SummarizationSetBy = Automatic

		column 'NAV Transaction Type'
			dataType: int64
			formatString: 0
			lineageTag: eef1e1d5-df7a-432f-8350-885fe2328d4b
			summarizeBy: sum
			sourceColumn: NAV Transaction Type

			annotation SummarizationSetBy = Automatic

		column 'Currency Code'
			dataType: string
			lineageTag: 061baced-9031-475a-b15d-79a16d22cb53
			summarizeBy: none
			sourceColumn: Currency Code

			annotation SummarizationSetBy = Automatic

		column 'Customer No_'
			dataType: string
			lineageTag: c271c008-a843-4653-81f5-7fa57c2c724c
			summarizeBy: none
			sourceColumn: Customer No_

			annotation SummarizationSetBy = Automatic

		column 'Vendor No_'
			dataType: string
			lineageTag: 714c636f-6341-4f6e-a38c-c27e132a6676
			summarizeBy: none
			sourceColumn: Vendor No_

			annotation SummarizationSetBy = Automatic

		column 'Type Only Mapping'
			dataType: int64
			formatString: 0
			lineageTag: 6c0b4685-d547-4c92-a959-d95d3314bd05
			summarizeBy: sum
			sourceColumn: Type Only Mapping

			annotation SummarizationSetBy = Automatic

		partition 'Amazon External Mapping' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Amazon External Mapping$16a92810-c8ee-4b2e-bef7-56ae63123a9c" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Amazon External Mapping$16a92810-c8ee-4b2e-bef7-56ae63123a9c"]}[Data],
					    #"Filtered Rows" = Table.SelectRows(#"dbo_RevolutionSupply$Amazon External Mapping$16a92810-c8ee-4b2e-bef7-56ae63123a9c", each ([shipping_credits] = "55209") and ([type] <> "Ajuste" and [type] <> "Reembolso" and [type] <> "Tarifa de servicio"))
					in
					    #"Filtered Rows"

		annotation PBI_ResultType = Table
```
