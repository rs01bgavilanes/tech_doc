---
title: Sales Invoice Line
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Sales Invoice Header'
		lineageTag: 910c6b05-f461-4cfd-bf95-f3457af0776c

		column No_
			dataType: string
			lineageTag: a6b368c8-df31-4d71-a80b-bbe834ef8c0a
			summarizeBy: none
			sourceColumn: No_

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Customer No_'
			dataType: string
			lineageTag: 5929b07f-5b71-4c1c-8f83-2b8906d40237
			summarizeBy: none
			sourceColumn: Sell-to Customer No_

			annotation SummarizationSetBy = Automatic

		column 'Posting Date'
			dataType: dateTime
			formatString: Long Date
			lineageTag: cb19d3b2-4ad4-4af6-a73b-ccedc6f19d12
			summarizeBy: none
			sourceColumn: Posting Date

			variation Variation
				isDefault
				relationship: 57c928e4-ac18-4e82-851c-bd9d2daf5a0c
				defaultHierarchy: LocalDateTable_32720bb9-ad84-46c8-bcaa-2fa1394fbc0e.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column 'Posting Description'
			dataType: string
			lineageTag: 6e152e44-2247-4c28-a0b7-43fb90dbbad1
			summarizeBy: none
			sourceColumn: Posting Description

			annotation SummarizationSetBy = Automatic

		column 'External Document No_'
			dataType: string
			lineageTag: 51f1f00c-d810-448e-9573-a939837ee2ae
			summarizeBy: none
			sourceColumn: External Document No_

			annotation SummarizationSetBy = Automatic

		partition 'Sales Invoice Header' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Sales Invoice Header" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Sales Invoice Header"]}[Data],
					    #"Removed Columns" = Table.RemoveColumns(#"dbo_RevolutionSupply$Sales Invoice Header",{"timestamp"}),
					    #"Filtered Rows" = Table.SelectRows(#"Removed Columns", each ([#"Sell-to Customer No_"] = "10160")),
					    #"Removed Columns1" = Table.RemoveColumns(#"Filtered Rows",{"Bill-to Name", "Bill-to Name 2", "Bill-to Address", "Bill-to Address 2", "Bill-to City", "Bill-to Contact", "Ship-to Code", "Ship-to Name", "Ship-to Name 2", "Ship-to Address", "Ship-to Address 2", "Ship-to City", "Ship-to Contact", "Order Date"}),
					    #"Changed Type" = Table.TransformColumnTypes(#"Removed Columns1",{{"Posting Date", type date}}),
					    #"Removed Columns2" = Table.RemoveColumns(#"Changed Type",{"Shipment Date", "Payment Terms Code", "Due Date", "Payment Discount _", "Pmt_ Discount Date", "Shipment Method Code", "Location Code", "Shortcut Dimension 1 Code", "Shortcut Dimension 2 Code", "Customer Posting Group", "Currency Code", "Currency Factor", "Customer Price Group", "Prices Including VAT", "Invoice Disc_ Code", "Customer Disc_ Group", "Language Code", "Salesperson Code", "Order No_", "No_ Printed", "On Hold", "Applies-to Doc_ Type", "Applies-to Doc_ No_", "Bal_ Account No_", "VAT Registration No_", "Reason Code", "Gen_ Bus_ Posting Group", "EU 3-Party Trade", "Transaction Type", "Transport Method", "VAT Country_Region Code", "Sell-to Customer Name", "Sell-to Customer Name 2", "Sell-to Address", "Sell-to Address 2", "Sell-to City", "Sell-to Contact", "Bill-to Post Code", "Bill-to County", "Bill-to Country_Region Code", "Sell-to Post Code", "Sell-to County", "Sell-to Country_Region Code", "Ship-to Post Code", "Ship-to County", "Ship-to Country_Region Code", "Bal_ Account Type", "Exit Point", "Correction", "Document Date", "Area", "Transaction Specification", "Payment Method Code", "Shipping Agent Code", "Package Tracking No_", "Pre-Assigned No_ Series", "No_ Series", "Order No_ Series", "Pre-Assigned No_", "User ID", "Source Code", "Tax Area Code", "Tax Liable", "VAT Bus_ Posting Group", "VAT Base Discount _", "Invoice Discount Calculation", "Invoice Discount Value", "Prepayment No_ Series", "Prepayment Invoice", "Prepayment Order No_", "Quote No_", "Sell-to Phone No_", "Sell-to E-Mail", "Payment Instructions", "Payment Instructions Name", "Work Description", "Dimension Set ID", "Payment Service Set ID", "Document Exchange Identifier", "Document Exchange Status", "Doc_ Exch_ Original Identifier", "Coupled to CRM", "Direct Debit Mandate ID", "Cust_ Ledger Entry No_", "Campaign No_", "Sell-to Contact No_", "Bill-to Contact No_", "Opportunity No_", "Responsibility Center", "Allow Line Disc_", "Get Shipment Used", "Id", "Ship-to UPS Zone", "Tax Exemption No_", "STE Transaction ID", "Electronic Document Sent", "Original Document XML", "No_ of E-Documents Sent", "Original String", "Digital Stamp SAT", "Certificate Serial No_", "Signed Document XML", "Digital Stamp PAC", "Electronic Document Status", "Date_Time Stamped", "Date_Time Sent", "Date_Time Canceled", "Error Code", "Error Description", "PAC Web Service Name", "QR Code", "Fiscal Invoice Number PAC", "Date_Time First Req_ Sent", "CFDI Purpose", "CFDI Relation", "TINX Webshop Order", "TINX Entity ID", "TINX Webshop Increment ID", "Your Reference", "Bill-to Customer No_"}),
					    #"Removed Blank Rows" = Table.SelectRows(#"Removed Columns2", each not List.IsEmpty(List.RemoveMatchingItems(Record.FieldValues(_), {"", null}))),
					    #"Sorted Rows" = Table.Sort(#"Removed Blank Rows",{{"External Document No_", Order.Ascending}}),
					    #"Removed Blank Rows1" = Table.SelectRows(#"Sorted Rows", each not List.IsEmpty(List.RemoveMatchingItems(Record.FieldValues(_), {"", null}))),
					    #"Filtered Rows2" = Table.SelectRows(#"Removed Blank Rows1", each Date.IsInPreviousNMonths([Posting Date], 3) or Date.IsInCurrentMonth([Posting Date]))
					in
					    #"Filtered Rows2"

		annotation PBI_ResultType = Table
```
