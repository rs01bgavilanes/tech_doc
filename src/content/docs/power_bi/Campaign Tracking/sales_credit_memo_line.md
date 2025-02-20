---
title: Sales Credit Memo Line
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Sales Credit Memo Header'
		lineageTag: 23cb6b16-7f77-4012-86bc-22e8df6dc17a

		column No_
			dataType: string
			lineageTag: 441fd38b-86ac-4eed-af02-f490443d7e05
			summarizeBy: none
			sourceColumn: No_

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Customer No_'
			dataType: string
			lineageTag: 0fe6add7-1f9e-419a-9f8f-3c438145fad2
			summarizeBy: none
			sourceColumn: Sell-to Customer No_

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Customer No_'
			dataType: string
			lineageTag: 7d70d9d9-b497-4097-a3da-2f5c24856598
			summarizeBy: none
			sourceColumn: Bill-to Customer No_

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Name'
			dataType: string
			lineageTag: b1806dc3-fc26-4a28-a232-e4c335a97625
			summarizeBy: none
			sourceColumn: Bill-to Name

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Name 2'
			dataType: string
			lineageTag: f79c9796-1287-4318-8373-5c0c5b044483
			summarizeBy: none
			sourceColumn: Bill-to Name 2

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Address'
			dataType: string
			lineageTag: b8813fd1-b339-47b1-9f67-8fb677252947
			summarizeBy: none
			sourceColumn: Bill-to Address

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Address 2'
			dataType: string
			lineageTag: 432c37ba-2c24-4148-9327-3b7c8ba64f23
			summarizeBy: none
			sourceColumn: Bill-to Address 2

			annotation SummarizationSetBy = Automatic

		column 'Bill-to City'
			dataType: string
			lineageTag: efd56783-4f99-4b0c-8979-84bdab74b924
			summarizeBy: none
			sourceColumn: Bill-to City

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Contact'
			dataType: string
			lineageTag: 04be912e-1884-444b-9018-8cfc6d175941
			summarizeBy: none
			sourceColumn: Bill-to Contact

			annotation SummarizationSetBy = Automatic

		column 'Your Reference'
			dataType: string
			lineageTag: cd3544ea-23d2-4b82-8def-4726c09a9661
			summarizeBy: none
			sourceColumn: Your Reference

			annotation SummarizationSetBy = Automatic

		column 'Ship-to Code'
			dataType: string
			lineageTag: a419abc2-073d-4384-9972-3b8ea24681aa
			summarizeBy: none
			sourceColumn: Ship-to Code

			annotation SummarizationSetBy = Automatic

		column 'Ship-to Name'
			dataType: string
			lineageTag: 00f6cadb-70a6-4eb9-95fd-de5424ed825e
			summarizeBy: none
			sourceColumn: Ship-to Name

			annotation SummarizationSetBy = Automatic

		column 'Ship-to Name 2'
			dataType: string
			lineageTag: ab1e8545-d1d2-4cbb-992e-a1adc630056a
			summarizeBy: none
			sourceColumn: Ship-to Name 2

			annotation SummarizationSetBy = Automatic

		column 'Ship-to Address'
			dataType: string
			lineageTag: f05a2da3-42c1-4d24-a117-0382547221f6
			summarizeBy: none
			sourceColumn: Ship-to Address

			annotation SummarizationSetBy = Automatic

		column 'Ship-to Address 2'
			dataType: string
			lineageTag: 5cf91b34-2631-48b3-96d8-52494c3bc02c
			summarizeBy: none
			sourceColumn: Ship-to Address 2

			annotation SummarizationSetBy = Automatic

		column 'Ship-to City'
			dataType: string
			lineageTag: 2b0ca156-75a5-4222-8aa3-e262550038bc
			summarizeBy: none
			sourceColumn: Ship-to City

			annotation SummarizationSetBy = Automatic

		column 'Ship-to Contact'
			dataType: string
			lineageTag: 9109be06-50fe-472f-b2fc-fa7c30b3f1c2
			summarizeBy: none
			sourceColumn: Ship-to Contact

			annotation SummarizationSetBy = Automatic

		column 'Posting Date'
			dataType: dateTime
			formatString: Long Date
			lineageTag: a79db766-ce9d-44f8-8671-2b21c947813a
			summarizeBy: none
			sourceColumn: Posting Date

			variation Variation
				isDefault
				relationship: 41783086-d3d7-4a7f-a318-3995cf6a15bd
				defaultHierarchy: LocalDateTable_ff018b2d-8420-45da-9871-0b3c5c0531c1.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column 'Shipment Date'
			dataType: dateTime
			formatString: General Date
			lineageTag: 47d442f1-d3f7-4a66-90b6-797bea26e60e
			summarizeBy: none
			sourceColumn: Shipment Date

			variation Variation
				isDefault
				relationship: d859b173-fa4a-4247-9b7e-c99fdb3bf8f0
				defaultHierarchy: LocalDateTable_824e97b8-5b96-4345-91b8-0a91263113a3.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column 'Posting Description'
			dataType: string
			lineageTag: 630a0df5-7db4-4553-a7d2-37838b1bda2b
			summarizeBy: none
			sourceColumn: Posting Description

			annotation SummarizationSetBy = Automatic

		column 'Payment Terms Code'
			dataType: string
			lineageTag: 63b9a6b9-6b00-4842-ad45-df3a6a3029ef
			summarizeBy: none
			sourceColumn: Payment Terms Code

			annotation SummarizationSetBy = Automatic

		column 'Due Date'
			dataType: dateTime
			formatString: General Date
			lineageTag: f45d3926-c342-4e2b-ae30-d5ab63b3704b
			summarizeBy: none
			sourceColumn: Due Date

			variation Variation
				isDefault
				relationship: b061b33f-970d-4f3a-81da-53f6bca5f9d5
				defaultHierarchy: LocalDateTable_dde60cc8-e094-4813-b8d8-f721cef74798.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column 'Payment Discount _'
			dataType: double
			lineageTag: 9fa15503-085f-4f67-b4c4-92045640aecb
			summarizeBy: sum
			sourceColumn: Payment Discount _

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Pmt_ Discount Date'
			dataType: dateTime
			formatString: General Date
			lineageTag: 86511432-14e1-4ad4-88b3-95115e20fdbd
			summarizeBy: none
			sourceColumn: Pmt_ Discount Date

			variation Variation
				isDefault
				relationship: 9c5872ef-9db9-478a-9877-75f55f66feb4
				defaultHierarchy: LocalDateTable_4b1cb8fc-64b1-40bd-8974-e1aac06db18a.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column 'Shipment Method Code'
			dataType: string
			lineageTag: 7b76fdcb-b499-4f27-8146-b5af147ee7a2
			summarizeBy: none
			sourceColumn: Shipment Method Code

			annotation SummarizationSetBy = Automatic

		column 'Location Code'
			dataType: string
			lineageTag: f976ea93-aef0-4f90-8254-aeb097c3f063
			summarizeBy: none
			sourceColumn: Location Code

			annotation SummarizationSetBy = Automatic

		column 'Shortcut Dimension 1 Code'
			dataType: string
			lineageTag: 44aaa2c4-1c1d-4182-a677-216b4fb6edac
			summarizeBy: none
			sourceColumn: Shortcut Dimension 1 Code

			annotation SummarizationSetBy = Automatic

		column 'Shortcut Dimension 2 Code'
			dataType: string
			lineageTag: 2a06aa0b-ae35-4e28-899f-5e0299c437ec
			summarizeBy: none
			sourceColumn: Shortcut Dimension 2 Code

			annotation SummarizationSetBy = Automatic

		column 'Customer Posting Group'
			dataType: string
			lineageTag: 5a32c9ad-1561-419c-83b7-2f7e8b74d98b
			summarizeBy: none
			sourceColumn: Customer Posting Group

			annotation SummarizationSetBy = Automatic

		column 'Currency Code'
			dataType: string
			lineageTag: 96d089c9-09f6-42e4-b81a-9d8ede250c06
			summarizeBy: none
			sourceColumn: Currency Code

			annotation SummarizationSetBy = Automatic

		column 'Currency Factor'
			dataType: double
			lineageTag: 2e17f995-7884-4823-92fe-00759f01fba9
			summarizeBy: sum
			sourceColumn: Currency Factor

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Customer Price Group'
			dataType: string
			lineageTag: 69a34fbb-bf48-440e-b619-088d6706e1e4
			summarizeBy: none
			sourceColumn: Customer Price Group

			annotation SummarizationSetBy = Automatic

		column 'Prices Including VAT'
			dataType: int64
			formatString: 0
			lineageTag: 4a249fe9-af0e-48bb-b794-a6c8e3453df9
			summarizeBy: sum
			sourceColumn: Prices Including VAT

			annotation SummarizationSetBy = Automatic

		column 'Invoice Disc_ Code'
			dataType: string
			lineageTag: 38bd6cfa-e09c-48c5-99ed-2a7401414064
			summarizeBy: none
			sourceColumn: Invoice Disc_ Code

			annotation SummarizationSetBy = Automatic

		column 'Customer Disc_ Group'
			dataType: string
			lineageTag: cab07daf-bebe-4620-8c93-7efd7415956a
			summarizeBy: none
			sourceColumn: Customer Disc_ Group

			annotation SummarizationSetBy = Automatic

		column 'Language Code'
			dataType: string
			lineageTag: a92ffff7-f959-4abd-8fce-c107a3657ff7
			summarizeBy: none
			sourceColumn: Language Code

			annotation SummarizationSetBy = Automatic

		column 'Salesperson Code'
			dataType: string
			lineageTag: 08ad01b8-5b39-427c-83af-4041f24f59af
			summarizeBy: none
			sourceColumn: Salesperson Code

			annotation SummarizationSetBy = Automatic

		column 'No_ Printed'
			dataType: int64
			formatString: 0
			lineageTag: 4d5b71a2-b3c0-432e-aacf-7c0e83927be9
			summarizeBy: sum
			sourceColumn: No_ Printed

			annotation SummarizationSetBy = Automatic

		column 'On Hold'
			dataType: string
			lineageTag: c05e5a4b-3d56-4da9-b68f-3083295e8bc8
			summarizeBy: none
			sourceColumn: On Hold

			annotation SummarizationSetBy = Automatic

		column 'Applies-to Doc_ Type'
			dataType: int64
			formatString: 0
			lineageTag: 5cdf9b0d-af0c-4a7c-ac51-020fda620340
			summarizeBy: sum
			sourceColumn: Applies-to Doc_ Type

			annotation SummarizationSetBy = Automatic

		column 'Applies-to Doc_ No_'
			dataType: string
			lineageTag: b1c2689f-55fe-4769-babc-66e85004941d
			summarizeBy: none
			sourceColumn: Applies-to Doc_ No_

			annotation SummarizationSetBy = Automatic

		column 'Bal_ Account No_'
			dataType: string
			lineageTag: 1451421b-2891-46e4-8cd1-0bead7dd0e22
			summarizeBy: none
			sourceColumn: Bal_ Account No_

			annotation SummarizationSetBy = Automatic

		column 'VAT Registration No_'
			dataType: string
			lineageTag: a87b9e5d-c34a-4a9a-9545-a1175c015ae6
			summarizeBy: none
			sourceColumn: VAT Registration No_

			annotation SummarizationSetBy = Automatic

		column 'Reason Code'
			dataType: string
			lineageTag: 3e236912-662c-447c-8eff-d5d29aa4dda4
			summarizeBy: none
			sourceColumn: Reason Code

			annotation SummarizationSetBy = Automatic

		column 'Gen_ Bus_ Posting Group'
			dataType: string
			lineageTag: 466e622a-89df-409d-82a6-36333beb37be
			summarizeBy: none
			sourceColumn: Gen_ Bus_ Posting Group

			annotation SummarizationSetBy = Automatic

		column 'EU 3-Party Trade'
			dataType: int64
			formatString: 0
			lineageTag: 477868ab-a92e-409e-90ca-7791901ad5c5
			summarizeBy: sum
			sourceColumn: EU 3-Party Trade

			annotation SummarizationSetBy = Automatic

		column 'Transaction Type'
			dataType: string
			lineageTag: 27aa72c0-cf58-4846-ab00-869f7392c381
			summarizeBy: none
			sourceColumn: Transaction Type

			annotation SummarizationSetBy = Automatic

		column 'Transport Method'
			dataType: string
			lineageTag: 13e6658f-b88e-4c61-b4aa-4c8247738a01
			summarizeBy: none
			sourceColumn: Transport Method

			annotation SummarizationSetBy = Automatic

		column 'VAT Country_Region Code'
			dataType: string
			lineageTag: cd9a946c-d665-4c49-bff8-a0f4ce3be516
			summarizeBy: none
			sourceColumn: VAT Country_Region Code

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Customer Name'
			dataType: string
			lineageTag: 01eba565-2a0a-4e8c-979b-54eff24f0b3c
			summarizeBy: none
			sourceColumn: Sell-to Customer Name

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Customer Name 2'
			dataType: string
			lineageTag: eb2bcb3b-c3e7-4aaf-946f-fdbdffa64a23
			summarizeBy: none
			sourceColumn: Sell-to Customer Name 2

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Address'
			dataType: string
			lineageTag: 0dad675a-ef00-4e9b-b208-360aa115cc44
			summarizeBy: none
			sourceColumn: Sell-to Address

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Address 2'
			dataType: string
			lineageTag: e0b09187-129f-46f8-ab8f-0cb1f2683184
			summarizeBy: none
			sourceColumn: Sell-to Address 2

			annotation SummarizationSetBy = Automatic

		column 'Sell-to City'
			dataType: string
			lineageTag: 307fb973-5a1e-4327-b6cb-a1c8f6c7469d
			summarizeBy: none
			sourceColumn: Sell-to City

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Contact'
			dataType: string
			lineageTag: 47ec6548-c132-44cf-8895-b0549ec961c0
			summarizeBy: none
			sourceColumn: Sell-to Contact

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Post Code'
			dataType: string
			lineageTag: 86f307de-da6e-4fbd-8c4b-dd71665439f0
			summarizeBy: none
			sourceColumn: Bill-to Post Code

			annotation SummarizationSetBy = Automatic

		column 'Bill-to County'
			dataType: string
			lineageTag: 0da13d86-6151-4f32-b70c-317d6fef1a8d
			summarizeBy: none
			sourceColumn: Bill-to County

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Country_Region Code'
			dataType: string
			lineageTag: 43d7a7d9-6d30-4a04-85d2-479e3e202382
			summarizeBy: none
			sourceColumn: Bill-to Country_Region Code

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Post Code'
			dataType: string
			lineageTag: 96103677-faf0-4b9d-af14-f4330033f36b
			summarizeBy: none
			sourceColumn: Sell-to Post Code

			annotation SummarizationSetBy = Automatic

		column 'Sell-to County'
			dataType: string
			lineageTag: ad6ab9a3-1cef-4b7a-aaf5-f285c3114efc
			summarizeBy: none
			sourceColumn: Sell-to County

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Country_Region Code'
			dataType: string
			lineageTag: e0ccb678-bc91-4114-8cb8-9117f7603515
			summarizeBy: none
			sourceColumn: Sell-to Country_Region Code

			annotation SummarizationSetBy = Automatic

		column 'Ship-to Post Code'
			dataType: string
			lineageTag: ef97642c-a25b-49c1-82ef-81751f3ba8ed
			summarizeBy: none
			sourceColumn: Ship-to Post Code

			annotation SummarizationSetBy = Automatic

		column 'Ship-to County'
			dataType: string
			lineageTag: 89e56139-6e7d-4802-af71-6318e0af9bd2
			summarizeBy: none
			sourceColumn: Ship-to County

			annotation SummarizationSetBy = Automatic

		column 'Ship-to Country_Region Code'
			dataType: string
			lineageTag: d942abd6-fc65-4ffb-81d2-9dc5b92efa7a
			summarizeBy: none
			sourceColumn: Ship-to Country_Region Code

			annotation SummarizationSetBy = Automatic

		column 'Bal_ Account Type'
			dataType: int64
			formatString: 0
			lineageTag: 0b055411-112f-496d-9eb8-0f3c36b73cb5
			summarizeBy: sum
			sourceColumn: Bal_ Account Type

			annotation SummarizationSetBy = Automatic

		column 'Exit Point'
			dataType: string
			lineageTag: 5d8c5764-2e0d-48a5-b98c-b2a4ff109b76
			summarizeBy: none
			sourceColumn: Exit Point

			annotation SummarizationSetBy = Automatic

		column Correction
			dataType: int64
			formatString: 0
			lineageTag: c1d77aaa-b2cc-4699-8f31-f2916faf0d08
			summarizeBy: sum
			sourceColumn: Correction

			annotation SummarizationSetBy = Automatic

		column 'Document Date'
			dataType: dateTime
			formatString: General Date
			lineageTag: 077d456e-5fae-4ac8-8c18-5d8b3e778d46
			summarizeBy: none
			sourceColumn: Document Date

			variation Variation
				isDefault
				relationship: a9d87ae4-2bfc-4a6d-8dc3-9ed89f19d179
				defaultHierarchy: LocalDateTable_e4378e7b-350a-4eb0-81c3-1aa86bbc22fc.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column 'External Document No_'
			dataType: string
			lineageTag: c8c60ea5-ef79-4e41-8339-328c760079e6
			summarizeBy: none
			sourceColumn: External Document No_

			annotation SummarizationSetBy = Automatic

		column Area
			dataType: string
			lineageTag: 410566ce-ad0b-4c03-ae1e-532e15b87de5
			summarizeBy: none
			sourceColumn: Area

			annotation SummarizationSetBy = Automatic

		column 'Transaction Specification'
			dataType: string
			lineageTag: c5bd2881-cc7a-43a4-a596-083fa6d916b3
			summarizeBy: none
			sourceColumn: Transaction Specification

			annotation SummarizationSetBy = Automatic

		column 'Payment Method Code'
			dataType: string
			lineageTag: c6683ebd-b931-43b9-8286-5cd66251ff13
			summarizeBy: none
			sourceColumn: Payment Method Code

			annotation SummarizationSetBy = Automatic

		column 'Pre-Assigned No_ Series'
			dataType: string
			lineageTag: b8c4861d-7127-4643-b6a5-c05a8098e371
			summarizeBy: none
			sourceColumn: Pre-Assigned No_ Series

			annotation SummarizationSetBy = Automatic

		column 'No_ Series'
			dataType: string
			lineageTag: 87cf2475-bde6-4005-b615-bc10338ee32d
			summarizeBy: none
			sourceColumn: No_ Series

			annotation SummarizationSetBy = Automatic

		column 'Pre-Assigned No_'
			dataType: string
			lineageTag: 5f632588-7242-4927-904b-d8ff45e0d4ed
			summarizeBy: none
			sourceColumn: Pre-Assigned No_

			annotation SummarizationSetBy = Automatic

		column 'User ID'
			dataType: string
			lineageTag: 33d8ea7a-75e6-4732-a09e-56e1bb437e2d
			summarizeBy: none
			sourceColumn: User ID

			annotation SummarizationSetBy = Automatic

		column 'Source Code'
			dataType: string
			lineageTag: ed912dd3-35a9-4c42-a2da-4c2c7bf0a54e
			summarizeBy: none
			sourceColumn: Source Code

			annotation SummarizationSetBy = Automatic

		column 'Tax Area Code'
			dataType: string
			lineageTag: 30feaf62-9e7a-4ecf-9e50-e242af1d843e
			summarizeBy: none
			sourceColumn: Tax Area Code

			annotation SummarizationSetBy = Automatic

		column 'Tax Liable'
			dataType: int64
			formatString: 0
			lineageTag: 818030b2-d97f-4862-82da-a9ae451cac4e
			summarizeBy: sum
			sourceColumn: Tax Liable

			annotation SummarizationSetBy = Automatic

		column 'VAT Bus_ Posting Group'
			dataType: string
			lineageTag: a08cc284-80f4-436a-bcd9-4f3346afb033
			summarizeBy: none
			sourceColumn: VAT Bus_ Posting Group

			annotation SummarizationSetBy = Automatic

		column 'VAT Base Discount _'
			dataType: double
			lineageTag: 6310dfcb-b574-4bc4-ab4f-5bb682fe6f9a
			summarizeBy: sum
			sourceColumn: VAT Base Discount _

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Prepmt_ Cr_ Memo No_ Series'
			dataType: string
			lineageTag: f88189db-9dc6-434b-8321-fed22ae9f64e
			summarizeBy: none
			sourceColumn: Prepmt_ Cr_ Memo No_ Series

			annotation SummarizationSetBy = Automatic

		column 'Prepayment Credit Memo'
			dataType: int64
			formatString: 0
			lineageTag: 0ed9ce3d-be45-42b1-88cf-6cee4ed950d9
			summarizeBy: sum
			sourceColumn: Prepayment Credit Memo

			annotation SummarizationSetBy = Automatic

		column 'Prepayment Order No_'
			dataType: string
			lineageTag: 3c6b2194-6a63-435d-812b-f7bf1cb30e52
			summarizeBy: none
			sourceColumn: Prepayment Order No_

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Phone No_'
			dataType: string
			lineageTag: 83d6185d-73dd-4100-a90d-167aea30f458
			summarizeBy: none
			sourceColumn: Sell-to Phone No_

			annotation SummarizationSetBy = Automatic

		column 'Sell-to E-Mail'
			dataType: string
			lineageTag: 7823a316-9546-4d08-9b44-5cfe9330e0f3
			summarizeBy: none
			sourceColumn: Sell-to E-Mail

			annotation SummarizationSetBy = Automatic

		column 'Dimension Set ID'
			dataType: int64
			formatString: 0
			lineageTag: 58f2c463-baa1-4ecd-b8e1-e717c6d3d779
			summarizeBy: count
			sourceColumn: Dimension Set ID

			annotation SummarizationSetBy = Automatic

		column 'Document Exchange Identifier'
			dataType: string
			lineageTag: 0869436d-a6c8-40df-8af3-7c6598b46723
			summarizeBy: none
			sourceColumn: Document Exchange Identifier

			annotation SummarizationSetBy = Automatic

		column 'Document Exchange Status'
			dataType: int64
			formatString: 0
			lineageTag: f77629d1-ef8d-477f-b931-72dacffa3e30
			summarizeBy: sum
			sourceColumn: Document Exchange Status

			annotation SummarizationSetBy = Automatic

		column 'Doc_ Exch_ Original Identifier'
			dataType: string
			lineageTag: 3de42a71-31b6-4f37-9928-4902781004f4
			summarizeBy: none
			sourceColumn: Doc_ Exch_ Original Identifier

			annotation SummarizationSetBy = Automatic

		column 'Cust_ Ledger Entry No_'
			dataType: int64
			formatString: 0
			lineageTag: 1df0c8a6-a68e-4151-92af-17396b50c187
			summarizeBy: sum
			sourceColumn: Cust_ Ledger Entry No_

			annotation SummarizationSetBy = Automatic

		column 'Campaign No_'
			dataType: string
			lineageTag: 6fbceffd-4c69-4064-9b71-da037a093a9d
			summarizeBy: none
			sourceColumn: Campaign No_

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Contact No_'
			dataType: string
			lineageTag: be991998-29b4-4cab-bb5e-3a397f63762b
			summarizeBy: none
			sourceColumn: Sell-to Contact No_

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Contact No_'
			dataType: string
			lineageTag: e5144990-030b-41f3-a15c-264e6b8d9946
			summarizeBy: none
			sourceColumn: Bill-to Contact No_

			annotation SummarizationSetBy = Automatic

		column 'Opportunity No_'
			dataType: string
			lineageTag: 5923913b-221c-4d43-8365-b6eddff914d9
			summarizeBy: none
			sourceColumn: Opportunity No_

			annotation SummarizationSetBy = Automatic

		column 'Responsibility Center'
			dataType: string
			lineageTag: b1827705-bb70-4eb0-a835-d5969d0d4ce6
			summarizeBy: none
			sourceColumn: Responsibility Center

			annotation SummarizationSetBy = Automatic

		column 'Return Order No_'
			dataType: string
			lineageTag: bfa33ce8-804c-4fd1-8966-15d348af1a54
			summarizeBy: none
			sourceColumn: Return Order No_

			annotation SummarizationSetBy = Automatic

		column 'Return Order No_ Series'
			dataType: string
			lineageTag: 64d0082f-ffe2-45f8-bc89-660d1d94286d
			summarizeBy: none
			sourceColumn: Return Order No_ Series

			annotation SummarizationSetBy = Automatic

		column 'Allow Line Disc_'
			dataType: int64
			formatString: 0
			lineageTag: 9f551094-9bc1-4566-a43f-76d47bb07dc0
			summarizeBy: sum
			sourceColumn: Allow Line Disc_

			annotation SummarizationSetBy = Automatic

		column 'Get Return Receipt Used'
			dataType: int64
			formatString: 0
			lineageTag: 5a90648a-cb11-4ac6-8c87-7284e405cee5
			summarizeBy: sum
			sourceColumn: Get Return Receipt Used

			annotation SummarizationSetBy = Automatic

		column Id
			dataType: string
			lineageTag: fa657773-342d-4510-ab6b-2a1d5d29b0d1
			summarizeBy: none
			sourceColumn: Id

			annotation SummarizationSetBy = Automatic

		column 'Ship-to UPS Zone'
			dataType: string
			lineageTag: acc81db7-f591-41eb-b277-3b45ff534092
			summarizeBy: none
			sourceColumn: Ship-to UPS Zone

			annotation SummarizationSetBy = Automatic

		column 'Tax Exemption No_'
			dataType: string
			lineageTag: 625f2c6c-c918-4ecd-bb21-0aae43701683
			summarizeBy: none
			sourceColumn: Tax Exemption No_

			annotation SummarizationSetBy = Automatic

		column 'STE Transaction ID'
			dataType: string
			lineageTag: 86bf4142-27bc-4c17-bbd1-94d7057c08cb
			summarizeBy: none
			sourceColumn: STE Transaction ID

			annotation SummarizationSetBy = Automatic

		column 'Electronic Document Sent'
			dataType: int64
			formatString: 0
			lineageTag: b7b63387-3e6d-4bae-a580-3fd694a61c2c
			summarizeBy: sum
			sourceColumn: Electronic Document Sent

			annotation SummarizationSetBy = Automatic

		column 'No_ of E-Documents Sent'
			dataType: int64
			formatString: 0
			lineageTag: 4cc4e271-6e92-4a9a-842b-71211d9b4528
			summarizeBy: sum
			sourceColumn: No_ of E-Documents Sent

			annotation SummarizationSetBy = Automatic

		column 'Certificate Serial No_'
			dataType: string
			lineageTag: 6dc8e52a-7504-474e-88ce-fe84fd514ef2
			summarizeBy: none
			sourceColumn: Certificate Serial No_

			annotation SummarizationSetBy = Automatic

		column 'Electronic Document Status'
			dataType: int64
			formatString: 0
			lineageTag: 0ad7c32d-8d66-43a7-985f-615f6ef2fa54
			summarizeBy: sum
			sourceColumn: Electronic Document Status

			annotation SummarizationSetBy = Automatic

		column 'Date_Time Stamped'
			dataType: string
			lineageTag: f39c277b-2692-44b8-98c6-204b6b34450e
			summarizeBy: none
			sourceColumn: Date_Time Stamped

			annotation SummarizationSetBy = Automatic

		column 'Date_Time Sent'
			dataType: string
			lineageTag: b363233e-0a94-47c3-9d23-f731eacf63b6
			summarizeBy: none
			sourceColumn: Date_Time Sent

			annotation SummarizationSetBy = Automatic

		column 'Date_Time Canceled'
			dataType: string
			lineageTag: 9290e857-1a7b-4b8a-bb8a-b7509e2cb09d
			summarizeBy: none
			sourceColumn: Date_Time Canceled

			annotation SummarizationSetBy = Automatic

		column 'Error Code'
			dataType: string
			lineageTag: 5c816bf9-200f-4e26-95da-e78f2ea2092f
			summarizeBy: none
			sourceColumn: Error Code

			annotation SummarizationSetBy = Automatic

		column 'Error Description'
			dataType: string
			lineageTag: 0212f49d-10eb-4dd9-98dd-cd4ffa6673e4
			summarizeBy: none
			sourceColumn: Error Description

			annotation SummarizationSetBy = Automatic

		column 'PAC Web Service Name'
			dataType: string
			lineageTag: 3f6ccbef-ca29-4bda-909d-c54c540f1ead
			summarizeBy: none
			sourceColumn: PAC Web Service Name

			annotation SummarizationSetBy = Automatic

		column 'Fiscal Invoice Number PAC'
			dataType: string
			lineageTag: b54cfd9f-6f07-4660-82ee-db02472fa28e
			summarizeBy: none
			sourceColumn: Fiscal Invoice Number PAC

			annotation SummarizationSetBy = Automatic

		column 'Date_Time First Req_ Sent'
			dataType: string
			lineageTag: 8d5352ab-b394-4cbd-9f38-022152f2c958
			summarizeBy: none
			sourceColumn: Date_Time First Req_ Sent

			annotation SummarizationSetBy = Automatic

		column 'CFDI Purpose'
			dataType: string
			lineageTag: 1b2215b8-26b9-4954-88da-11c51f27c6be
			summarizeBy: none
			sourceColumn: CFDI Purpose

			annotation SummarizationSetBy = Automatic

		column 'CFDI Relation'
			dataType: string
			lineageTag: 6163558d-8da9-4461-9392-4881e34fa2a6
			summarizeBy: none
			sourceColumn: CFDI Relation

			annotation SummarizationSetBy = Automatic

		column 'TINX Webshop Order'
			dataType: int64
			formatString: 0
			lineageTag: 2902fa75-028a-44ff-8037-2f8cad3d0492
			summarizeBy: sum
			sourceColumn: TINX Webshop Order

			annotation SummarizationSetBy = Automatic

		column 'TINX Entity ID'
			dataType: int64
			formatString: 0
			lineageTag: 9d9a8a80-ad7b-4e26-b260-b3dcc4e3f307
			summarizeBy: count
			sourceColumn: TINX Entity ID

			annotation SummarizationSetBy = Automatic

		column 'TINX Webshop Increment ID'
			dataType: int64
			formatString: 0
			lineageTag: e7cc4b22-1e5b-4c83-be02-10c5faddcca0
			summarizeBy: count
			sourceColumn: TINX Webshop Increment ID

			annotation SummarizationSetBy = Automatic

		partition 'Sales Credit Memo Header' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Sales Cr_Memo Header" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Sales Cr_Memo Header"]}[Data],
					    #"Changed Type" = Table.TransformColumnTypes(#"dbo_RevolutionSupply$Sales Cr_Memo Header",{{"Posting Date", type date}}),
					    #"Filtered Rows" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNMonths([Posting Date], 3) or Date.IsInCurrentMonth([Posting Date]))
					in
					    #"Filtered Rows"

		annotation PBI_ResultType = Table
```
